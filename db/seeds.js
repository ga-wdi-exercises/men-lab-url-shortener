var Url = require("./models")

let seedData = [{
  short: "goo.gl",
  long: "google.com"
},
{
  short: "ti.mf",
  long: "timfoley.me"
}]

Url.remove({}).then(_ => {
  Url.collection.insert(seedData)
  .then(_ => process.exit()  )
})
