var express    = require("express");
// var Url = require("./db/models").Url
var bodyParser = require("body-parser");
var hbs        = require("hbs");
var checksum   = require("checksum");
var mongoose   = require("./db/connection")

var app = express();

var Minime = mongoose.model("Minime");

app.set("port", process.env.Port || 4000);
app.set("view engine", "hbs");
// app.engine(".hbs", hbs({
//   extname: ".hbs",
//   partialsDir: "views/",
//   layoutsDir: "views/",
//   defaultLayout: "layout-main"
// }));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
  Minime.find({}).then(minimes => {
    res.render("index", {minimes})
  });
});

app.get("/new", (req, res) => {
  res.render("new")
});

app.delete("/minimes/:id", (req, res) => {
  Minime.remove({_id: req.params.id}).then(() => {
    res.redirect("/")
  });
});

app.get("/minimes/:id", (req, res) => {
  Url.findOne({_id: req.params.id}).then(minime => {
    res.render("show", {
      minime,
      
    })
  })
})

app.post("/minimes", (req, res) => {
  Url.create({
    longerUrl: req.body.longerUrl,
    shorterUrl: checksum(req.body.longerUrl).substr(0, 5)
  }).then(minime => {
    res.redirect(`/minimes/${minime._id}`)
  })
})


app.listen(app.get("port"), function(){
  console.log("Austin Power")
})
