var express = require("express")
var Url = require("./db/models.js")
var app = express();

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
app.get("/", function(req, res){
  res.send("hello")
});

app.get("/:short", function(req, res){
  Url.findOne({short: req.params.short}).then(url => {
    res.render
  })
})
