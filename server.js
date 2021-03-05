/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db.config');
const Room = require('./model/room.model');
const Object = require('./model/object.model');
const routes = require('./routes');

const app = express();
const port = 9090;

app.use(bodyParser.json());

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// // drop the table if it already exists
sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
  Room.bulkCreate([
    {
      name: 'Hallway',
      north: 2,
      objects: []
    },
    {
      name: 'Dining Room',
      south: 1,
      west: 3,
      east: 4,
      objects: []
    },
    {
      name: 'Kitchen',
      east: 2,
      objects: [{ name: 'Knife' }]
    },
    {
      name: 'Sun Room',
      west: 2,
      objects: [{ name: 'Potted Plant' }]
    }
  ])
    .then(() => Room.findAll())
    .then((rooms) => {
      console.log(rooms);
    });

  Object.bulkCreate([
    {
      name: 'Knife'
    },
    {
      name: 'Potted Plant'
    },
    {
      name: 'Pillow'
    }
  ])
    .then(() => Object.findAll())
    .then((objects) => {
      console.log(objects);
    });
});

app.get('/', (req, res) => res.json({
  status: 200,
  message: 'Welcome to A-Maze-ingly Retro Route Puzzle App'
}));

app.use('/', routes);

app.listen(port, () => console.log(`A-Maze-ingly Retro Route Puzzle listening on port ${port}!`));
