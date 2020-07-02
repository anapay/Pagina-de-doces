
const express = require('express')
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require('body-parser')
const Cliente = require("./models/Cliente")

// config template engine handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// config bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//rotas
app.get("/cadastro", function (req, res) {
    res.render("formulario")
})

app.post("/Received", function (req, res) {
    console.log(req.body)
    Cliente.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        mensagem: req.body.mensagem
    }).then(function () {
        res.redirect(("/"))
    }).catch(function (erro) {
        res.send("Erro ao cadastrar cliente! " + erro)
    })

})
// rotas
app.get("/", function (req, res) {
    Cliente.findAll({ raw: true }).then(function (clientes) {
        // console.log(clientes)
        res.render("home", { clientes: clientes })

    })

})
app.get("/clientes", function (req, res) {
    Cliente.findAll({ raw: true }).then(function (clientes) {
        Cliente.findAll({ order: [["id", "DESC"]] })

        res.render("lista", { clientes: clientes })
    })

})
app.get("/deletar/:id", function(req, res){
    Cliente.destroy({where: {"id": req.params.id}}).then(function(){
        res.send("Deletado com sucesso!")
    }).catch(function(erro){
        res.send("Cliente não existe")
    })
})



app.listen(8888, function () {
    console.log("Initialized server url http://localhost:8888");
})