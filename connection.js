const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize( process.env.DBDATA, process.env.DBUSER, process.env.DBPASS, {
    host: process.env.DBHOST,
    dialect: 'mysql',
    define:{
        timestamps: false
    }
})

module.exports = sequelize;