//connects the variables defined in connection.js
var mongoose = require("./connection.js")
//requiring the seed data file
var seedData = require("./seeds.json")
//requires the model schema for UrlSchema
var models = require("./models.js")

//using this as a getter and copying it to this js file
var Url = mongoose.model("Url")

//DELETE everything in the DB -- "_" is the same as "()" -- collection is used instead of tables
Url.remove({}).then( _ => {
  Url.collection.insert(seedData)
  .then( _ => process.exit() )
}).catch( err => console.log(err) )
