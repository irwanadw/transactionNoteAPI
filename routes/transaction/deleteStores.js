// const express = require('express')
// const app = express.Router()
// const db = require('../../controller/dbController')
// const authentication = require('../../middleware/authenticationMiddleware')

// app.use(authentication)


// app.delete('/stores', (req, res) => {
//     let id = req.query
//     const idIsAvailable = db.get('stores', id)

//     if (!idIsAvailable) {
//         res.status(400).send('You must enter a valid ID')
//     } else {
//         db.remove('stores', id)
//         res.send('your ID has succesfully deleted')
//     }
//     return
// })


// module.exports = app
