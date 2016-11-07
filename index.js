var express = require("express");
var Url = require("./db/models")
var app = express();
var hbs = require("hbs")



app.get("./url/:id", function(req, res){
  Url.findOne({short: req.params.short}).then(function(url){
    res.redirect(url.long)
  });
});

app.post("./url/:id", function(req, res){
  Url.create(req.body.url).then(function(url){
      res.redirect("/urls/" + url.short)
  });
});
