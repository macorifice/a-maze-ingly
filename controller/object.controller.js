const Object = require('../model/object.model');

exports.getObjects = (req, res) => {
  try {
    Object.findAll().then((objects) => res.json({
      status: 200,
      objects,
      message: 'Object lists retrieved successfully'
    }));
  }
  catch (error) {
    res.json({
      status: 400,
      message: `Error: ${error}`
    });
  }
};

exports.getObject = (req, res) => {
  try {
    Object.findAll({ where: { id: req.params.id } }).then((object) => res.json({
      status: 200,
      object,
      message: `Object ${req.params.id} retrieved successfully`
    }));
  }
  catch (error) {
    res.json({
      status: 400,
      message: `Error: ${error}`
    });
  }
};

exports.addObject = (req, res) => {
  try {
    Object.create({
      name: req.body.name
    }).then((object) => {
      res.json({
        status: 201,
        object,
        message: `Object ${object.id} created successfully`
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

exports.updObject = (req, res) => {
  try {
    Object.findByPk(req.params.id).then((object) => {
      object
        .update({
          name: req.body.name
        })
        // eslint-disable-next-line no-shadow
        .then((object) => {
          res.json({
            status: 200,
            object,
            message: `Object ${object.id} updated successfully`
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

exports.delObject = (req, res) => {
  try {
    Object.findByPk(req.params.id)
      .then((object) => {
        object.destroy();
      })
      .then(() => {
        res.json({
          status: 200,
          message: `Object ${req.params.id} deleted successfully`
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
