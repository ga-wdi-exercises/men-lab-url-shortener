var mongoose = require("./models")
var Url = mongoose.model("Url")


Url.create({long: "alkjgageognal", short: "alk"})
Url.create ({long: "fajglaogeioahgoei", short: "faj"})
Url.create({long: "ageognewutyusqnnnnnn", short: "age"})

Url.remove({}).then(() =>{
 Url.collection.insert(url).then(() => process.exit())
}).catch(err => console.log(err))
