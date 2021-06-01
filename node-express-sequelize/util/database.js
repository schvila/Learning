const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Stan*1108', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
