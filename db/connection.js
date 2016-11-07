var mongoose = require("mongoose");

var UrlSchema = new mongoose.Schema(
  {
    short: String,
    long: String,
    timestamp: Number,
  });

mongoose.connect("mongodb://localhost/urlshortener")

module.exports = mongoose;
