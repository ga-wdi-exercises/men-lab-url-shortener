var Url = require("./models");



Url.create({short: "http://espn.com", long: "http://espnlongaddress.com/sports.html", timestamp: Date.now() }).then(url => {
  console.log(url)
})
