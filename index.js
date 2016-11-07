// index.js

var express = require("express")
var parser = require("body-parser")
var hbs = require("express-handlebars")
var db = require("./db/connection")

var Url = db.model("Url")

var app = express()
