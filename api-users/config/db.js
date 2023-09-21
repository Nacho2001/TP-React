const {Sequelize} = require('sequelize');

// Datos de la DB para acceder con Squelize

const sequelize = new Sequelize(
    "usuarios",
    "sequelizeUser",
    "sequelizeUser",
    {
        host:"localhost",
        dialect:"mysql"
    }
)

module.exports = sequelize;