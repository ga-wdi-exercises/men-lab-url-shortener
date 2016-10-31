const mongoose = require("./connection")

const UrlSchema = new mongoose.Schema({
  short: String,
  long: String,
  timestamp: Date
})

const Url = mongoose.model("Url", UrlSchema)

module.exports = { Url: Url }
