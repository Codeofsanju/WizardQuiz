const Sequelize = require('sequelize')
const db = require('./db')

const Question = db.define('questions', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Question
