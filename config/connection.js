// Sequelize allows for interaction with various relational databases without the need to change the models controllers views and routes as would be required when working with mysql2.

const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.HOST,
      dialect: 'mysql', // could change dialect: to sqLite, postgresql, or other relational databases.
      port: 3306
    }
  );
}

module.exports = sequelize;
