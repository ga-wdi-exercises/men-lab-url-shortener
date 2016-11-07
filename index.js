var express = require("express")
var Url = require("./db/models") 

var app = express();

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), function(){
  console.log("It's alive!");
})
