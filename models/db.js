

const Sequelize = require('sequelize')
const sequelize = new Sequelize('cliente', 'ana', 'joao',
    {
        host: 'localhost',
        dialect: 'mysql'
    });
    
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}