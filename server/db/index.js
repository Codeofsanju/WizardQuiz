const db = require('./db')
const Question = require('./Question')
const Choice = require('./Choice')

Question.hasMany(Choice)
Choice.belongsTo(Question)

module.exports = {
  db,
  Question,
  Choice
}
