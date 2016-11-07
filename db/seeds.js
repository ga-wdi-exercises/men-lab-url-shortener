var mongoose = require("./models")
var Url = mongoose.model("Url")

Url.remove({}).then(() =>{
 Url.collection.insert(url).then(() => process.exit())
}).catch(err => console.log(err))

var google = new Url ({long: "alkjgageognal", short: "alk"})
var yahoo = new Url ({long: "fajglaogeioahgoei", short: "faj"})
var aol = new Url ({long: "ageognewutyusqnnnnnn", short: "age"})

var url = [google, yahoo, aol]
