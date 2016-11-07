var mongoose = require("mongoose")

var UrlSchema = new mongoose.Schema(
  {
    short: String,
    long: String,
    timestamp: Date
  }
)
mongoose.model("Url", UrlSchema)
mongoose.connect("mongodb://localhost/urlshortener")

module.exports = mongoose
