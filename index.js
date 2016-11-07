var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("./db/connection.js")
var Short = mongoose.model("Short")

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.set("view engine", "hbs")

app.listen(4000, () => {
  console.log("server working!");
})

app.get("/", function(req, res){
  Short.find({}).then((shorts) => {
    res.render("index", {shorts})
  })
})
