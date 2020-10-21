const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.patch('/stores', (req, res) => {
    body = req.body.id
    const isBodyAvailable = db.get('stores', id, body)
    if (!isBodyAvailable) {
        res.status(400).send('You enter wrong body')
    } else {
        db.edit('stores', body)
            .assign(body)
            .write()
        res.send('Your request is success ')

    }
    return
})


module.exports = app