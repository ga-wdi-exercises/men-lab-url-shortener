var express = require("express")
var mongoose     = require("./db/connection");
var hbs     = require("express-handlebars");
var Url = mongoose.model("Url")
var parser = require("body-parser")
var checksum = require("checksum")



var app = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.json())
app.use(parser.urlencoded({extended: true}));

app.get("/", function(req, res){
  Url.find({}).then(urls => {
    res.render("index", {urls});
  })
})

app.get("/new", (req, res) => {
  res.render("new")
})

app.post("/urls", (req, res) => {
  Url.create({
    long: req.body.long,
    short: checksum(req.body.long).substr(0, 5)}).then(url => {
    res.redirect(`/urls/${url._id}`)
  })
})
app.listen(app.get("port"), function(){
  console.log("It's online!");
});
