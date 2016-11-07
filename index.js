var express = require('express')
var parser = require('body-parser')
var hbs = require('hbs')
var mongoose = require('./db/models.js')
var Url = mongoose.model('Url')

var app = express()

app.set('port', 3002);

app.get('/:short', (req, res) => {
  Url.findOne({short: req.params.short}).then((url) =>{
    res.redirect(url.long)
  })
})

app.get('/', (req, res) => {
  res.send('hello')
})


app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
