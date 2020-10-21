const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.delete('/inventories', (req, res) => {
    let id = req.query
    const idIsAvailable = db.get('inventories', id)

    if (!idIsAvailable) {
        res.status(400).send('You must enter a valid ID')
    } else {
        db.remove('books', id)
        res.send('your ID has succesfully deleted')
    }
    return
})


module.exports = app
