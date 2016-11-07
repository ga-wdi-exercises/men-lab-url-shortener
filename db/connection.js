var mongoose = require("mongoose");

var MinimeSchema = new mongoose.Schema


mongoose.model("Minime", MinimeSchema);
mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost/minime");

module.exports = mongoose;
