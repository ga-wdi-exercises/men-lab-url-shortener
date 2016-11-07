var mongoose = require("./connection.js")

var seedData = require("./seeds.json")

var Address = mongoose.model("Address")

Address.remove({}).then(_ =>{
  Address.collection.insert(seedData)
  .then(_ => process.exit())
}).catch(err => console.log(err))
