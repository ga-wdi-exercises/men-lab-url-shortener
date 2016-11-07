var mongoose = require("./connection")
var UrlSchema = mongoose.Schema({
  short: String,
  long: String,
  timestamp: Date,
})

mongoose.Promise = global.Promise

// mongoose.connect("mongodb://localhost/urlshortener")

module.exports = mongoose.model("Url", UrlSchema)
