var express = require("express")
var Url = require("./db/models")

var app = express();

app.get("./url/:id", function(req, res) {
  Url.findOne({short: req.params.short}).then(function(url){
    res.redirect(url.long)
    });
  });
