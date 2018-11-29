const router = require('express').Router()
const {Question, Choice} = require('../db')

router.get('/', (req, res, next) => {
  Question.findAll({include: [Choice]})
    .then(questions => res.json(questions))
    .catch(next)
})

module.exports = router
