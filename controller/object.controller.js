const Object = require('../model/object.model');

exports.getObjects = (req, res) => {
  Object.findAll().then((objects) => res.json(objects));
};

exports.getObject = (req, res) => {
  Object.findAll({ where: { id: req.params.id } }).then((object) => res.json(object));
};

exports.addObject = (req, res) => {
  Object.create({
    name: req.body.name
  }).then((object) => {
    res.json(object);
  });
};

exports.updObject = (req, res) => {
  Object.findByPk(req.params.id).then((object) => {
    object
      .update({
        name: req.body.name
      })
      // eslint-disable-next-line no-shadow
      .then((object) => {
        res.json(object);
      });
  });
};

exports.delObject = (req, res) => {
  Object.findByPk(req.params.id)
    .then((object) => {
      object.destroy();
    })
    .then(() => {
      res.sendStatus(200);
    });
};
