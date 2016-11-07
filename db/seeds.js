var mongoose = require('./models.js')
var Url = mongoose.model('Url')

var sampleUrls = [
  {
    short: '445566',
    long: 'http://www.cnn.com'
  },
  {
    short: '334455',
    long: 'http://www.espn.com'
  },
  {
    short: '223344',
    long: 'http://www.facebook.com'
  },
  {
    short: '112233',
    long: 'http://www.linkedin.com'
  },
]

Url.remove({}).then(() => {
  sampleUrls.forEach((url) => {
    Url.create(url, (err, url) => {
      if(err){
        console.log(err)
      }
    })
  })
}).catch((error) => {
  console.log(error)
})
