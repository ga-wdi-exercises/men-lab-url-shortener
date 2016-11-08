var express = require("express");
var hbs     = require("express-handlebars");
var mongoose     = require("./db/connection");
var Url=  require("./db/models")
var parser = require ("body-parser")
var app     = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}))




app.get("/", function(req, res){
  console.log("Root Dir")
  res.render("url-index");
});

app.get("/urls", function(req, res){
  console.log("/urs")
  Url.find({}).then(urls=>{
    console.log(urls.length)
    for (i=0;i<urls.length;i++) {
      console.log(urls[i].short,urls[i].long)
    }

    res.render("url-index", {
      urls
    });
  })
});

app.get("/:short", (req, res) => {
  console.log("/short")
  Url.findOne({short: req.params.short}).then(url => {
    res.redirect(url.long)
  })
})


app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
