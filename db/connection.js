var mongoose = require("mongoose")

var UrlSchema = new mongoose.Schema({
  short: String,
  long: String,
  timestamp: String,
})

mongoose.model("Url", UrlSchema)
mongoose.Promise = global.Promise //required to use promises in mongoose
mongoose.connect("mongodb://localhost/urlshortener")

module.exports = mongoose
