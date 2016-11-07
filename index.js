var express   = require("express");
var parser    = require("body-parser");
var hbs       = require("express-handlebars");
var mongoose  = require("./db/connection");
var Url       = mongoose.model("Url")

var app     = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
 extname:        ".hbs",
 partialsDir:    "views/",
 layoutsDir:     "views/",
 defaultLayout:  "url-new"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended:true}));

app.get("/", function(req, res){
 res.render("url-new");
});

app.get('/:short', function(req, res){
Url.findOne({short: req.params.short}).then(function(url) {

   res.render("url-index", {
     candidates,
   });
 })
});

// app.get("/candidates/:name", function(req, res){
//  Candidate.findOne({name: req.params.name}).then(function(candidate) {
//    res.render("candidates-show", {
//      candidate,
//    });
//  });
// });
//
// app.post("/candidates", (req, res) => {
//   Candidate.create(req.body.candidate).then(candidate => {
//     res.redirect("/candidates/" + candidate.name)
//  // res.json(req.body);
//   });
// })
//
// app.post("/candidates/:name", function(req, res) {
//   Candidate.findOneAndUpdate({name: req.params.name}, req.body.candidate, {new: true}).
//     res.redirect("/candidates/" + candidate.name);
//   });
// });
//

app.listen(app.get("port"), function(){
 console.log("It's aliiive!");
});
