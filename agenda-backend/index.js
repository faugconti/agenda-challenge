const sequelize = require('./database/index');
const seed = require('./database/seeders/seed'); 
const app = require('./app');

async function init_db() {
  try {
    await sequelize.sync({ force: true });
    if (process.env.SEED_DB === 'true') {
      await seed(); 
    }
    console.log('Running db!');
  } catch (error) {
    console.error('Error: ', error);
  }
}

init_db().then(() => {
  app.listen(process.env.BACKEND_PORT, () => console.log(`Running @ http://localhost:${process.env.BACKEND_PORT}`));
});