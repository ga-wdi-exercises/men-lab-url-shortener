var express = require("express")
var app = express()
var mongoose = require("./connection")
var hbs = require("express-handlebars")
var Url = mongoose.model("Url")
var parser = require("body-parser")

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs")
app.use(parser.urlencoded({extended:true}))

app.get("/:short", function(req, res){
  Url.findOne({short: req.params.short}).then((url) => {
    res.redirect(url.long)
    // res.redirect(url.long)
  })
});

// app.get("/:short")
app.listen(app.get("port"), function(){
  console.log("ugh");
})
