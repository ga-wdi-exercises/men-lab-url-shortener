var mongoose = require("./connection")
var seedData = require("./seed")
var Url = mongoose.model("Url")


Url.remove({}).then(() => {
  Url.collection.insert(seedData).then(() => {
    process.exit()
  })
})
