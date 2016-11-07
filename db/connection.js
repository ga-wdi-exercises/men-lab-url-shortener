var mongoose = require("mongoose")

//allows promises for mongoose
mongoose.Promise = global.Promise
//connects with the mongoDB database
mongoose.connect("mongodb://localhost/menlab")

//exports mongoose
module.exports = {
  mongoose: mongoose,
}
