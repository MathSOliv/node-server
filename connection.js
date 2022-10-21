const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DBHOST ,
    user: process.env.DBUSER ,
    database: process.env.DBDATA ,
    password: process.env.DBPASS
});

module.exports = connection