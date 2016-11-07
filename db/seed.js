var mongoose = require("./connection")
var seedData = require("./seeds") //seeds.json file

var Url = mongoose.model("Url")


Url.remove({}).then(_ => {
  Url.collection.insert(seedData)
  .then(_ => process.exit() )
}).catch(err => console.log(err) )
