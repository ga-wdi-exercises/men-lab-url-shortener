var express = require("express")
var mongoose     = require("./db/connection");
var hbs     = require("express-handlebars");
var Url = mongoose.model("Url")


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

app.get("/", function(req, res){
  Url.find({}).then(urls => {
    res.render("index", {urls});
  })
})

app.listen(app.get("port"), function(){
  console.log("It's online!");
});
