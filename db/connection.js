var mongoose = require("mongoose")

var UrlSchema = new mongoose.Schema({
  short: String,
  long: String,
  timestamp: Date,
})

mongoose.model("Url", UrlSchema)
// mongoose.Promise = global.Promise


mongoose.connect("mongodb://localhost/men-lab-url-shortener")

module.exports = mongoose
