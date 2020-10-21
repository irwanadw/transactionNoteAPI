const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const addStore = require('./routes/stores/addStores')
const getStore = require('./routes/stores/getStores')
const deleteStore = require('./routes/stores/deleteStores')
const addInventories = require('./routes/inventories/addInventories')
const getInventories = require('./routes/inventories/getInventories')
const addBook = require('./routes/books/addBooks')
const getBook = require('./routes/books/getBooks')


const app = express()
app.use(bodyParser.json())

app.use(rootRoute)
app.use(addStore)
app.use(getStore)
app.use(deleteStore)
app.use(addInventories)
app.use(getInventories)
app.use(addBook)
app.use(getBook)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
