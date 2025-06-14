const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './agenda.sqlite', 
  logging: false  
});

module.exports = sequelize;