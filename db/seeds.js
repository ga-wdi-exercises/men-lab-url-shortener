var connection = require("./connection");
var models = require("./models");
mongoose.connect("mongodb://localhost/men-lab-url-shortener");

var longurl = "http://reallylongurlthatisusedfortesting.com/becauseithastobelong";
var short url = "http://reallyshorturl.com/yes";
