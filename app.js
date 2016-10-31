const express = require("express")
const app = express()
const Url = require("./db/models").Url
const bodyParser = require("body-parser")
const checksum = require("checksum")
const methodOverride = require("method-override")

app.set("view engine", "hbs")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(methodOverride((req, res) => {
  console.log("hello")
  if("_method" in req.query){
    return req.query._method
  }
}, {methods: ["POST", "GET"]}))
app.listen(3000, () => console.log("listening on port 3000"))

app.get("/", (req, res) => {
  Url.find({}).then(urls => {
    res.render("index", {urls})
  })
})

app.get("/new", (req, res) => {
  res.render("new")
})

app.delete("/urls/:id", (req, res) => {
  Url.remove({_id: req.params.id}).then(() => {
    res.redirect("/")
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

app.post("/urls", (req, res) => {
  Url.create({
    long: req.body.long,
    short: checksum(req.body.long).substr(0, 5)
  }).then(url => {
    res.redirect(`/urls/${url._id}`)
  })
})

app.get("/urls/:id/edit", (req, res) => {
  Url.findOne({_id: req.params.id}).then(url => {
    res.render("edit", {url})
  })
})

app.put("/urls/:id", (req, res) => {
  Url.findOneAndUpdate({_id: req.params.id}, {
    long: req.body.long,
    short: checksum(req.body.long).substr(0, 5)
  }, {new: true}).then(url => {
    res.redirect(`/urls/${url._id}`)
  })
})

// Non-RESTful

app.get("/:short", (req, res) => {
  Url.findOne({short: req.params.short}).then(url => {
    res.redirect(url.long)
  })
})
