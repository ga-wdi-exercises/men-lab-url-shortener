var mongoose = require("./connection.js").mongoose

//list the attributes of Url
var UrlSchema = mongoose.Schema({
  short: String,
  long: String,
  timestamp: { type: Date, default: Date.now },
})

//define the Url model
// var url = mongoose.model("Url", UrlSchema)

module.exports = {
  Url: mongoose.model("Url", UrlSchema),
}
