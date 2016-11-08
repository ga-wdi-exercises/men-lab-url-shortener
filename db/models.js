var mongoose = require ("mongoose");
var connection = require ("./connection");

var UrlSchema = new mongoose.Schema(
  {
    short: String,
    long: String,
    timestamp: Date,
  })

  var Url = mongoose.model("Url",UrlSchema);
  mongoose.Promise=global.Promise  // for promises to work due to mongoose bug
  mongoose.connect("mongodb://localhost/urlshort");

  module.exports=Url
