var mongoose = require("./connection.js")
mongoose.Promise = global.Promise

var UrlSchema =  new mongoose.Schema({
  long: String,
  short: String,
  timestamp: Date
})

var Url = mongoose.model("Url", UrlSchema)

module.exports = Url
