// connection start
var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/short")
// connection end

// model start
var ShortSchema = new mongoose.Schema({
  short: String,
  long: String,
  timestamp: Date,
})

var Short = mongoose.model("Short", ShortSchema)
mongoose.Promise = global.Promise

module.exports = mongoose
// model end

// seed start
Short.remove({}).then(() => {
  Short.create(
    {
    "short": "1.com",
    "long": "13245tryhgfsda.com",
    })
})
// seed end
