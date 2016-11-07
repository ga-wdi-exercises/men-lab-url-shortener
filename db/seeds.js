var mongoose = require("./models.js")

var Url = mongoose.model("Url")

// clear the database
Url.remove({}).then(() =>{
  Url.collection.insert(url).then(() => process.exit())
}).catch(err => console.log(err))
// Generate long and short urls
var one = new Url({short: "8419ef", long: "8419ef571ef6d28c9a9e820e70c2defd23b7d948"})
var two = new Url({short: "ja89w", long: "ja89wt9qtit09qeqioqguqo9girioouequ"})
var three = new Url({short: "7ahey", long: "7aheyjai2892n4n245n2nn3k1"})
var url = [one, two, three]
