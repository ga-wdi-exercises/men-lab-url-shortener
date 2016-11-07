var express = require("express")
// var hbs = require("express-handlebars")
var mongoose = require("./db/connection")
var Address = mongoose.model("Address")
var bodyParser = require("body-parser")

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "hbs")

app.get("/", function(req, res){
  console.log("hello!")
})

app.listen(4000, () => {
  console.log("working!")
})
