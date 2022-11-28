//Connection to mySQL DB

const mysql = require("mysql2/promise");
const dotenv = require("dotenv").config({ path: "../ENV/.env" });
//const dotenv = require('dotenv').config({ path: '../../ENV/.env' });

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
});

module.exports = { pool };
 