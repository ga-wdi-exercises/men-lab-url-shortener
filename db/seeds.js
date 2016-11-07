// db/seeds.js

var mongoose = require("./connection")

var Url = mongoose.model("Url")

// Seed data
var seedData = [
  {
    "short": "e3j9z",
    "long": "http://www.google.com"
  }, {
    "short": "fwsa1",
    "long": "http://www.reddit.com"
  }, {
    "short": "as1fo",
    "long": "http://www.youtube.com"
  }
]

// Insert seed data
Url.remove({}).then( () => {
  Url.collection.insert(seedData).then( () => {
    console.log(`urls collection seeded:`)
    console.log(seedData)
    process.exit()
  })
}).catch(err => {
  console.log(err)
})
