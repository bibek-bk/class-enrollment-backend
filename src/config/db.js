// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//   }
// );

// module.exports = sequelize;




const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    retry: {
      max: 5, // Retry up to 5 times
      match: [/SequelizeConnectionError/, /SequelizeConnectionRefusedError/],
    },
    logging: console.log, // Enable or disable logging as needed
  }
);

const connectWithRetry = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (err) {
    console.error('Database connection failed. Retrying in 5 seconds...', err);
    setTimeout(connectWithRetry, 5000);
  }
};

connectWithRetry();

module.exports = sequelize;