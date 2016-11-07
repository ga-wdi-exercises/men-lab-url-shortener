var express = require("express")
// var hbs = require("express-handlebars")
// var parser = require("body-parser")
var mongoose = require("./db/connection.js")
var Url = require("./db/models.js")

var app = express();

app.listen(3000, () => {
  console.log("i'm working, girl");
})

app.get("/", function(req, res) {
  res.send("hey girl!")
})
