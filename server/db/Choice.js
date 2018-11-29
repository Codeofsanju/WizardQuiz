const Sequelize = require('sequelize')
const db = require('./db')

const Choice = db.define('choices', {
  label: {
    type: Sequelize.STRING,
    allowNull: false
  },
  value: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Choice
