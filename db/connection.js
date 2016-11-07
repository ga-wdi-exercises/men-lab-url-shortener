var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/bytely")

var db = mongoose.connection

db.on("error", err => {
  console.log(err)
})

db.once("open", () => {
  console.log("Mongo is connected!")
})

module.exports = mongoose
