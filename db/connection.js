var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/urlshortener")
module.exports = mongoose
