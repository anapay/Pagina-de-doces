const Sequelize = require('sequelize')

const sequelize = new Sequelize('Posts', 'ana', 'joao',
    {
        host: 'localhost',
        dialect: 'mysql'
    });

// criando modelo de tabela no mysql atravez do sequelize
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }

})

// inserindo dados
Postagem.create({
    titulo: "Doces de casamento",
    conteudo: "os doce sde xasamento dizem muito sobre os noivos"

})

// fazendo tabela atravez do sequelize
const Cliente = sequelize.define('clientes', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    idade: {
        type: Sequelize.INTEGER
    }
})

// chamando a variavel postagem
// Postagem.sync({force: true})
// o force: true garante que a tabela seja criada por esse objeto jason
// Cliente.sync({force: true})