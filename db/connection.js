var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/urlshortner")
var UrlSchema = new mongoose.Schema(
  {
    short: String,
    long: String,
    timestamp: Date
  }
)
mongoose.model("Url", UrlSchema)

module.exports = mongoose
