var Url = require("./models")

Url.create({short: "http://short.com", long: "http://verylongaddress.com/stuff.html", timestamp: Date.now() }).then(url => {
 console.log(url)
})
