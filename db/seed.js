var Url = require("./models.js")

Url.remove({})
  .then( _ => {
    Url.create({
      "long": "https://github.com/bcope/men-lab-url-shortener/blob/solution/db/connection.js",
      "short": "123",
      "timestamp": Date.now()
    }).then( _ => {
      process.exit()
    })
  })
