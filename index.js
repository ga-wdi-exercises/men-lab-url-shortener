var express = require("express")
var app = express();
var Url = require("./db/models")


app.listen("2000", () => {
  console.log("Express is working")
})

app.get("/", (req, res) => {
  res.send("hello dominique")
})
app.get("/:short", (req, res) => {
  console.log(req.params)
  Url.findOne({short: req.params.short}).then((short) =>{
    console.log(`${short.long}`)
    res.redirect(`${short.long}`)
  }).catch(err => {
    console.log(err)
  })
})
