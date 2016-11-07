// to grab code from connection
var mongoose = require("mongoose")
var Schema = mongoose.Schema


var UrlSchema = new Schema(
  {
    short: String,
    long: String,
    timestamps: Date
  }
)

mongoose.Promise = global.Promise
mongoose.model("Url", UrlSchema)
mongoose.connect("mongodb://localhost/shorturl")
module.exports = mongoose
