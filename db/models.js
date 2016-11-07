var mongoose = require("./connection.js")

//list the attributes of Url
var UrlSchema = mongoose.Schema({
  short: String,
  long: String,
  timestamp: { type: Date, default: Date.now },
})

//define the Url model
mongoose.model("Url", UrlSchema)

module.exports = {
  Url
}
