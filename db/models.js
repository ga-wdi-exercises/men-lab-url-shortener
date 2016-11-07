var mongoose = require('./connection.js')

var UrlSchema = mongoose.Schema({
  short: String,
  long: String,
  timestamp: { type: Date, default: Date.now },
})

var Url = mongoose.model("Url", UrlSchema)

module.exports = mongoose
