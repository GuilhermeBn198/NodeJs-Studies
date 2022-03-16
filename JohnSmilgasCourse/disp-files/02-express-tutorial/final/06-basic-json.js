const express = require('express')
const app = express()
const { products } = require('./data')

//with this we can access the varios contents of data.js without passing the literalmente archive
app.get('/', (req, res) => {
  res.json(products) 
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
