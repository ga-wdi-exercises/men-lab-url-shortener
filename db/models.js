var mongoose = require("./connection.js")

var UrlSchema = mongoose.Schema({
  short: String,
  long: String,
  timestamp: Date
})

mongoose.Promise = global.Promise
mongoose.model("Url", UrlSchema)


module.exports = mongoose.model("Url", UrlSchema)
