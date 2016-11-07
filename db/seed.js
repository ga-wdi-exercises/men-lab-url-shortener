var mongoose  = require("./connection");
var seedData  = require("./seeds");

var Minime = mongoose.model("Minime");

Minime.remove({}).then(function(){
  Minime.collection.insert(seedData).then(function(){
    process.exit();
  });
});
