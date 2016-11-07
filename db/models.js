var mongoose = require("./connection.js")

var Schema = mongoose.Schema

var urlSchema = new Schema({
  short: String,
  long: String,
  timestamp: Date,
})

mongoose.Promise = global.Promise

mongoose.model("Url", urlSchema)

mongoose.connect("mongodb://localhost/shorturl")
module.exports = mongoose
