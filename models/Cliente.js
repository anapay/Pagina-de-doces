
const db = require("./db")

const Cliente = db.sequelize.define("cadastros", {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.INTEGER
    },
    mensagem: {
        type: db.Sequelize.TEXT
    }
})

module.exports = Cliente
//linha de sincronizção
// Cliente.sync({force: true})