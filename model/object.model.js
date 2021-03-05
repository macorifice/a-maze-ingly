const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

const Object = sequelize.define('object', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING
});

module.exports = Object;
