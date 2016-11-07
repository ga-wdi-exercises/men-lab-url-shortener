var express = require("express");
var Url = require("./db/models")


var app     = express();

app.get("/:short", function(req, res){
  Url.find({}).then(url => {
    res.send(url)
  }).catch(err => res.send(err))
});

app.listen(3000, () => {
 console.log("app listening at http://localhost:3000/")
})
