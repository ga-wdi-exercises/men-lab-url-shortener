var mongoose = require("mongoose")
var Schema = mongoose.Schema
var seedData = require("./seedData")

var UrlSchema = new Schema(
  {
    short: String,
    long: String,
    timestamps: Date
  }
)

mongoose.Promise = global.Promise
var Url = mongoose.model("Url", UrlSchema)
mongoose.connect("mongodb://localhost/shorturl")


Url.remove({}.then(()=> {
  Url.collection.insert(seedData).then(() => process.exit())
})
