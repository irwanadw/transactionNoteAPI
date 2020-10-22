const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')

const addTransactionRoute = require('./routes/transaction/addTransaction')
const getTransactionRoute = require('./routes/transaction/getTransaction')
const deleteTransactionRoute = require('./routes/transaction/deleteTransaction')
const editTransacitonRoute = require('./routes/transaction/editTransaction')
const addAccountRoute = require('./routes/account/addAccount')
const getAccountRoute = require('./routes/account/getAccount')
const deleteAccountRoute = require('./routes/account/deleteAccount')
const editAccountRoute = require('./routes/account/editAccount')
const addItemRoute = require('./routes/item/addItem')
const getItemRoute = require('./routes/item/getItem')
const deleteItemRoute = require('./routes/item/deleteItem')
const editItemRoute = require('./routes/item/editItem')

const app = express()
app.use(bodyParser.json())

app.use(rootRoute)
app.use(registerRoute)
app.use(loginRoute)

app.use(addTransactionRoute)
app.use(getTransactionRoute)
app.use(deleteTransactionRoute)
app.use(editTransacitonRoute)
app.use(addAccountRoute)
app.use(getAccountRoute)
app.use(deleteAccountRoute)
app.use(editAccountRoute)
app.use(addItemRoute)
app.use(getItemRoute)
app.use(deleteItemRoute)
app.use(editItemRoute)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
