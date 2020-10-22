const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')

const addTransactionRoute = require('./routes/transaction/addTransaction')
const getTransactionRoute = require('./routes/transaction/getTransaction')
// const deleteStore = require('./routes/stores/deleteStores')
// const editStore = require('./routes/stores/editStores')
const addAccountRoute = require('./routes/account/addAccount')
const getAccountRoute = require('./routes/account/getAccount')
// const deleteInventories = require('./routes/inventories/deleteInventories')
// const editInventories = require('./routes/inventories/editInventories')
// const addBook = require('./routes/books/addBooks')
// const getBook = require('./routes/books/getBooks')
// const deleteBook = require('./routes/books/deleteBooks')
// const editBook = require('./routes/books/editBooks')

const app = express()
app.use(bodyParser.json())

app.use(rootRoute)
app.use(registerRoute)
app.use(loginRoute)

app.use(addTransactionRoute)
app.use(getTransactionRoute)
// app.use(deleteStore)
// app.use(editStore)
app.use(addAccountRoute)
app.use(getAccountRoute)
// app.use(deleteInventories)
// app.use(editInventories)
// app.use(addBook)
// app.use(getBook)
// app.use(deleteBook)
// app.use(editBook)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
