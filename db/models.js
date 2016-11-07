var mongoose = require("./connection")

var UrlSchema = mongoose.Schema({
  short: String,
  long: String,
  timestamp: Date
})

module.exports = mongoose.model("Url", UrlSchema)
