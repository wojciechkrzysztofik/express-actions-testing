var express = require('express')
var hbs = require('handlebars')
var app = express()

// Configure view engine to render Mustache templates.
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.use(require('./controllers'))

app.listen(3000, function () {
  console.log('Your app listening on port 3000!')
})

module.exports = app
