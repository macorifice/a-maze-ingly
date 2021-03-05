const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

const Room = sequelize.define('room', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  north: Sequelize.INTEGER, // referring to a connected room
  south: Sequelize.INTEGER, // referring to a connected room
  west: Sequelize.INTEGER, // referring to a connected room
  east: Sequelize.INTEGER, // referring to a connected room
  objects: {
    type: Sequelize.JSON(Sequelize.STRING), // of Objects
    allowNull: true
  }
});

module.exports = Room;
