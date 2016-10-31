const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/urls")

module.exports = mongoose
