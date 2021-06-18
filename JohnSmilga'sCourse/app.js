const http = require('http')

const server = http.createServer((req, res) => { //every time a request comes to the server a callback is sent to the console
  console.log('request event')
  res.end('Hello World')
})

server.listen(5000, () => { //this function is asynchnous so it stays forever running 
  console.log('Server listening on port : 5000....')
})
