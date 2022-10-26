const Sequelize = require('sequelize')
const db = require('../connection')

const Desvios = db.define('controle_de_desvios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    preenchido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    envolvidos: {
        type: Sequelize.STRING,
        allowNull: false
    },
    equipe: {
        type: Sequelize.STRING,
        allowNull: false
    },
    acidente: {
        type: Sequelize.STRING,
        allowNull: false
    },
    resolvido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ato_condicao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    site: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Desvios;