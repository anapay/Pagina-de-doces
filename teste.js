
// Conectando-se ao banco de dados usando a extensao sequelize
const Sequelize = require('sequelize')

const sequelize = new Sequelize('Posts', 'ana', 'joao',
{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log('Connected!')
}).catch(function(){
    console.log('failed to connect: '+erro)
})