var mongoose = require("./connection")

var ShortUrlSchema = new mongoose.Schema({
  short: String,
  long: String,
  timestamp: Date
})

mongoose.model("ShortUrl", ShortUrlSchema)

mongoose.Promise = global.Promise