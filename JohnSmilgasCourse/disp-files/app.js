const express = require('express')
const app = express()

const auth = require('./routes/auth')
const people = require('./routes/people')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/login', auth)
app.use('/api/people', people)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})