// index.js

var express  = require("express")
var parser   = require("body-parser")
var hbs      = require("express-handlebars")
var checksum = require("checksum")
var db       = require("./db/connection")

var Url = db.model("Url")

var app = express()

app.set("port", process.env.PORT || 4000)
app.set("view engine", "hbs")
app.engine(".hbs", hbs({
  extname:       ".hbs",
  partialsDir:   "views/",
  layoutsDir:    "views/",
  defaultLayout: "layout"
}))
app.use("/assets", express.static("public"))
app.use(parser.urlencoded({extended: true}))

app.get("/", function(req, res) {
  res.render("welcome");
})

app.get("/urls", function(req, res) {
  Url.find({}).then(urls => {
    res.render("index", {
      urls,
    })
  })
})

app.get("/:short", function(req, res) {
  Url.findOne({short: req.params.short}).then((url) => {
    res.render("show", {
      url,
    })
  })
})

app.post("/urls", function(req, res) {
  Url.create({
    short: checksum(req.body.urls.long).substr(0,5),
    long: req.body.urls.long,
  }).then((url) => {
    res.redirect(`${url.short}`)
  })
})

app.listen(app.get("port"), function(){
  console.log("It's working! It's wooorking!!!");
});
