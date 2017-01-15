var express = require('express'),
    router = express.Router()

// /entries/list :get
router.get('/list', function (req, res) {
  var entries = [
    {
      'title': 'Lorem ipsum',
      'body': 'Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit.'
    },
    {
      'title': 'Nulla imperdiet sit amet magna',
      'body': 'Phasellus fermentum in, dolor. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit.'
    },
    {
      'title': 'Vestibulum dapibus',
      'body': 'Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim.'
    }
  ]

  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify(entries))
})

// /entries/add :get
router.get('/add', function (req, res) {
  res.render('entries/add')
})

// /entries/add :post
router.post('/add', function (req, res) {
  res.send('success')
})

module.exports = router
