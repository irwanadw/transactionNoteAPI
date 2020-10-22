const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')
const authentication = require('../../middleware/authenticationMiddleware')

app.use(authentication)


app.post('/account', (req, res) => {
  const body = req.body
  const result = db.add('account', body)
  if (!result) {
    res.status(400).send('Wrong body')
  } else {
    res.send(result)
  }
  return
})


module.exports = app