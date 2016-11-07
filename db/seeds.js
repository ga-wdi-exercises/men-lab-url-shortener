var mongoose = require("./connection.js")
var seedData = require("./seeds.json")


var Url = mongoose.model("Url")

Url.remove({}).then( _ => {
  Url.collection.insert(seedData)
    .then( _ => process.exit() )
}).catch(err => console.log(err))
