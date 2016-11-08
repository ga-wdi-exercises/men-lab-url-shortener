var mongoose = require("./connection")
var seedData = require("./seeds")
var Url=  require("./models")
console.log("seed data",seedData)
Url.remove({}).then(_ => {
  console.log("Insert data")
  Url.collection.insert(seedData, (err ,data) => {
    console.log(" after then")
    if (err){console.log(err)}
    else {
      console.log(data)
    }
    process.exit()
    }
  )

})
