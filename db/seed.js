var mongoose = require("./models.js")
var seedData = require("./seeds.json")
var Url = mongoose.model("Url")



Url.remove({}).then(() => {
  Url.collection.insert(seedData).then(() => process.exit())
}).catch(err => console.log(err))
