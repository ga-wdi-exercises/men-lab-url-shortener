var mongoose = require("mongoose")

var UrlSchema = new mongoose.Schema({
  long: String,
  short: String,
  timestamp: Date,
})

mongoose.model("Url", UrlSchema)
mongoose.Promise = global.Promise


module.exports = mongoose
