require("dotenv").config();
const Sequelize = require("sequelize");
const database = process.env.DB;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_Port;
const dialect = process.env.DB_DIALECT;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  port,
  logging: false,
  freezeTableName: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
