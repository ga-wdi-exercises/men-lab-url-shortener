var connections = require("./connection");
mongoose.model("Url", UrlSchema);
mongoose.connect("mongodb://localhost/men-lab-url-shortener");


var Url = new mongoose.Schema ({
  short: String
  long: String
  timestamp: String
});

var Url = mongoose.model('Url', UrlSchema);
