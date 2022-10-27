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
    lider: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gerente_obra: {
        type: Sequelize.STRING,
        allowNull: false
    },
    area: {
        type: Sequelize.STRING,
        allowNull: false
    },
    equipamentos: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nivel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    classificacao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo_risco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    site: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contrato: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ocorrido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Desvios;