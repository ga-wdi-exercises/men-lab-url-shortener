var mongoose = require("mongoose")

var UrlSchema = mongoose.Schema({
  short: String,
  long: String,
  timestamp: String,
})

mongoose.model("Url", UrlSchema)
mongoose.Promise = global.Promise


mongoose.connect("mongodb://localhost/men-lab-url-shortener")

module.exports = mongoose
