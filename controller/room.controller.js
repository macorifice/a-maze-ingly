const Room = require('../model/room.model');

exports.getRooms = (req, res) => {
  try {
    Room.findAll().then((rooms) => res.json({
      status: 200,
      rooms,
      message: 'Room lists retrieved successfully'
    }));
  }
  catch (error) {
    res.json({
      status: 400,
      message: `Error: ${error}`
    });
  }
};

exports.getRoom = (req, res) => {
  try {
    Room.findAll({ where: { id: req.params.id } }).then((room) => res.json({
      status: 200,
      room,
      message: `Room ${req.params.id} retrieved successfully`
    }));
  }
  catch (error) {
    res.json({
      status: 400,
      message: `Error: ${error}`
    });
  }
};

exports.addRoom = (req, res) => {
  try {
    Room.create({
      name: req.body.name,
      south: req.body.south,
      north: req.body.north,
      west: req.body.west,
      east: req.body.east,
      objects: req.body.objects
    }).then((room) => {
      res.json({
        status: 201,
        room,
        message: `Room ${room.id} created successfully`
      });
    });
  }
  catch (error) {
    res.json({
      status: 400,
      message: `Error: ${error}`
    });
  }
};

exports.updRoom = (req, res) => {
  try {
    Room.findByPk(req.params.id).then((room) => {
      room
        .update({
          name: req.body.name,
          south: req.body.south,
          north: req.body.north,
          west: req.body.west,
          east: req.body.east,
          objects: req.body.objects
        })
      // eslint-disable-next-line no-shadow
        .then((room) => {
          res.json({
            status: 200,
            room,
            message: `Room ${room.id} updated successfully`
          });
        });
    });
  }
  catch (error) {
    res.json({
      status: 400,
      message: `Error: ${error}`
    });
  }
};

exports.delRoom = (req, res) => {
  try {
    Room.findByPk(req.params.id)
      .then((room) => {
        room.destroy();
      })
      .then(() => {
        res.json({
          status: 200,
          message: `Room ${req.params.id} deleted successfully`
        });
      });
  }
  catch (error) {
    res.json({
      status: 400,
      message: `Error: ${error}`
    });
  }
};
