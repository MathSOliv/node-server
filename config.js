const mysql = require('mysql2')

const config = mysql.createConnection({
    host: process.env.DBHOST ,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBDATA,
    port: process.env.DBPORT
})

module.exports = config