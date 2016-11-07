var Url = require("./models")

Url.create({short: "http://miss.com", long: "http://mississippi.com", timestamp: Date.now() }).then(url => {
  console.log(url)
})
