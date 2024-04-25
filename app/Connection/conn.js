const express = require("express");
const app = express();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect:'mysql',
    host:process.env.DB_HOST,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    port:process.env.DB_PORT,
    timezone: '+05:30'
})
sequelize.authenticate().then(() => {
  console.log('database connected');
}).catch((error) => {
  console.error('Error syncing database:', error);
});

module.exports = sequelize;
