

const express = require('express');
const app = express();
const handlebars = require("express-handlebars")

// config template engine handlebars
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")





app.listen(8888, function(){
    console.log("Initialized server url http://localhost:8888");
});