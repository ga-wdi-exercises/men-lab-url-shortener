const express = require("express")
const app = express()
const Url = require("./db/models").Url
const bodyParser = require("body-parser")
const checksum = require("checksum")

app.set("view engine", "hbs")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.listen(3000, () => console.log("listening on port 3000"))

app.get("/", (req, res) => {
  Url.find({}).then(urls => {
    res.render("index", {urls})
  })
})

app.get("/new", (req, res) => {
  res.render("new")
})

app.post("/urls", (req, res) => {
  Url.create({
    long: req.body.long,
    short: checksum(req.body.long).substr(0, 5)
  }).then(url => {
    res.redirect(`/urls/${url._id}`)
  })
})

app.get("/urls/:id", (req, res) => {
  Url.findOne({_id: req.params.id}).then(url => {
    res.render("show", {
      url,
      host: req.headers.host
    })
  })
})

app.get("/:short", (req, res) => {
  Url.findOne({short: req.params.short}).then(url => {
    res.redirect(url.long)
  })
})
