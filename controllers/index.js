var express = require('express'),
    router = express.Router()

router.use('/', require('./default/hello'))
router.use('/entries', require('./entries/entries'))

module.exports = router
