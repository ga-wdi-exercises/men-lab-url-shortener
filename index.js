var express = require("express")
var app = express();
var Url = require("./db/models")
var bodyParser = require("body-parser")
var hbs = require("express-handlebars")
var checksum = require('checksum')
  , cs = checksum('dshaw')

if (cs === '9b8cebc0421241d087f6ab7e815285af803de7e7') {
  console.log('yay')
}

checksum.file('dshaw.txt', function (err, sum) {
   if (cs === '9b8cebc0421241d087f6ab7e815285af803de7e7') {
     console.log('yay yay')
   }
})
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "hbs")

app.listen("2000", () => {
  console.log("Express is working")
})
app.get("/new", (req, res) => {
  res.render("new-url")
})
app.post("/new", (req, res) => {
  Url.create(req.body.Url).then((object) => {  //we pass in object here for the instance we just created. body.Url comes from the name of the form. Its capitalized cuz thats what i put in the Name of the form
    console.log(object)
    res.redirect(`${object.long}`)
  })
})
app.get("/index", (req, res) => {
  Url.find({}).then((object) => {
    res.render("url-index", {
      object
    })
  }).catch(err => console.log(err))
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
