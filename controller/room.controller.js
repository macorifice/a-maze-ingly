const Room = require('../model/room.model');

exports.getRooms = (req, res) => {
  Room.findAll().then((rooms) => res.json(rooms));
};

exports.getRoom = (req, res) => {
  Room.findAll({ where: { id: req.params.id } }).then((room) => res.json(room));
};

exports.addRoom = (req, res) => {
  Room.create({
    name: req.body.name,
    south: req.body.south,
    north: req.body.north,
    west: req.body.west,
    east: req.body.east
  }).then((room) => {
    res.json(room);
  });
};

exports.updRoom = (req, res) => {
  Room.findByPk(req.params.id).then((room) => {
    room
      .update({
        name: req.body.name,
        south: req.body.south,
        north: req.body.north,
        west: req.body.west,
        east: req.body.east
      })
      // eslint-disable-next-line no-shadow
      .then((room) => {
        res.json(room);
      });
  });
};

exports.delRoom = (req, res) => {
  Room.findByPk(req.params.id)
    .then((room) => {
      room.destroy();
    })
    .then(() => {
      res.sendStatus(200);
    });
};
