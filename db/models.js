var mongoose = require("./connection")
// var mongoose = require('mongoose')
//
// var CandidateSchema = mongoose.Schema({
//   name: String,
//   year: Number,
// })
//
// mongoose.model("Candidate", CandidateSchema)
// mongoose.Promise = global.Promise
//
// mongoose.connect("mongodb://localhost/whenpresident")
//
// module.exports = mongoose

var UrlSchema = mongoose.Schema({
  short: String,
  long: String,
}, {
  timestamps: true
})

var Url = mongoose.model("Url", UrlSchema)
mongoose.Promise = global.Promise

module.exports = Url
