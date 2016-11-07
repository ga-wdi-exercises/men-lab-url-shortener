var mongoose = require("mongoose")
var UrlSchema = mongoose.Schema ({
  short: String,
  long: String,
  timestamp: Number,
})
mongoose.connect("mongodb://localhost/urlshortner")

module.exports = mongoose
