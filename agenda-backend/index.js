require('dotenv').config();
const express = require('express');
const sequelize = require('./database/index');
const app = express();

async function init_db() {
  try {
    await sequelize.sync({ force: true });
    console.log('Running db!');
  } catch (error) {
    console.error('Error: ', error);
  }
}

init_db().then(() => {
  app.listen(process.env.BACKEND_PORT, () => console.log(`Running @ http://localhost:${process.env.BACKEND_PORT}`));
});