var mongoose = require("./connection")

var UrlSchema = mongoose.Schema({
  short: {type: String, unique:true},
  long: String,
}, {
  timestamps: true
})

var Url = mongoose.model("Url", UrlSchema)
mongoose.Promise = global.Promise

module.exports = Url
