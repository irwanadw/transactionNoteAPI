const express = require('express')
const app = express.Router()
const hyperId = require('hyperid')
const db = require('../controller/dbController')



app.post('/login', (req, res) => {

  const user = db.get('users', req.body)
  const instance = hyperId()
  const token = instance()

  if (user) {
    user.token = token
    res.send(user)
  } else {
    res.status(404).send('not found')
  }

})


module.exports = app