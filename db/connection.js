var mongoose = require("mongoose")

var AddressSchema = mongoose.Schema({
  long: String,
  short: Number,
  timestamp: {type : Date, default: Date.now},
})

mongoose.model("Address", AddressSchema)
mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost/menlab")


module.exports = mongoose
