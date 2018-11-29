const router = require('express').Router()

router.use('/questions', require('./questions'))

module.exports = router
