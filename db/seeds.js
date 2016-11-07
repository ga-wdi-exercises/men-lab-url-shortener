// db/seeds.js

var mongoose = require("./connection")
var models = require("./models")

var Url = mongoose.model("Url")

// Seed data
var seedData = [
  {
    "short": "e3j9z",
    "long": "longlonglonglong"
  }, {
    "short": "fwsa1",
    "long": "anotherlongurl"
  }, {
    "short": "as1fo",
    "long": "thisurlissooolongman"
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
