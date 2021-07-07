//chamando o sequelize e o arquivo de configuraçao do databese.js
const Sequelize = require('sequelize');
const sequelize = require('../database/database.js')

// montando a estrutura da tabela no Sequelize.
// sequelize.define define a estrutura que a tabela deve possuir, passando o nome e os campos da tabela

const Metas = sequelize.define('Metas', {
    id: {
        allowNull: false, //permite vazio?
        autoIncrement: true, //é autoicremente?
        primaryKey: true, //é chave primaria?
        type: Sequelize.INTEGER //define o tipo de dado
    },
    data: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    meta: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    resultado: {
        allowNull: true,
        type: Sequelize.INTEGER
    },
    idTime: {
        type: Sequelize.INTEGER,
        references: {
            model: 'times', // refers to table name
            key: 'id', // 'id' refers to column in table
        }
    }
});

module.exports = Metas;