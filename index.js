var express     = require("express");
var hbs         = require("express-handlebars");
var mongoose    = require("./db/connection");
var Url         = require("./db/models")
var parser      = require("body-parser")

var app = express()
app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));

app.use(parser.urlencoded({extended:true}))


app.get("/", (req, res) => {
  Url.find({}).then(urls => {
    res.render("urls-index", {
      urls
    })
    // console.log(urls);
  })
})

app.post("/", (req, res) => {
  let longUrl = req.body.url.long
  let short = ""
  if (req.body.url.short) {
    short = req.body.url.short
  } else {
    let checksum = require("checksum")
    short = checksum(longUrl).substr(0,5)
  }
  Url.create({long: longUrl, short: short}).then(url => {
    res.redirect(302, "/")
  }).catch(err => {
    console.error(err);
    res.render("urls-index", {
      urls,
      err
    })
  })
})

app.get("/:short", function(req, res){
  var short = req.params.short
  Url.findOne({short: short}).then(url => {
    console.log(url);
    res.redirect(url.long)
  })
})


app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
