var express = require('express'),
    router = express.Router()

// / :get
router.get('/', function (req, res) {
  res.render('default/hello')
})

module.exports = router
