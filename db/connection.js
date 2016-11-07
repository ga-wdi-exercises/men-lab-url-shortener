// db/connection.js

var mongoose = require("mongoose")

// Define URL Model
var UrlSchema = mongoose.Schema({
  short: String,
  long: String,
  timestamp: Date,
})

mongoose.model("Url", UrlSchema)
mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost/url-shortener")

module.exports = mongoose
