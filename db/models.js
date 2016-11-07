var mongoose = require("./connection")
var UrlSchema = new mongoose.Schema ({
  short: String,
  long: String,
  timestamp: Number,
})

var Url = mongoose.model("Url", UrlSchema)
mongoose.Promise = global.Promise

module.exports = Url
