var Url = require("./models")

let seedData = [{
  short: "goo.gl",
  long: "http://google.com"
},
{
  short: "ti.mf",
  long: "http://timfoley.me"
}]

Url.remove({}).then(_ => {
  Url.collection.insert(seedData)
  .then(_ => process.exit()  )
})
