const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

const Room = sequelize.define('objects', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING
});

module.exports = Room;
