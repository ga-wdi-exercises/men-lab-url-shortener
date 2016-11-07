var mongoose = require("./connection");

var MinimeSchema = new mongoose.Schema({
  longerUrl: String,
  shorterUrl: String,
})

var Minime = mongoose.model("Minime", MinimeSchema);

module.exports = Minime;
