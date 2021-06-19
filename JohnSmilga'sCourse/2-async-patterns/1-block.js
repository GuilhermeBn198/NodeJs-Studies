const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home page')
  }
  if (req.url === '/about') {
    //blocking code!!!
    for (let i = 0; i < 1000; i++) { //this block of code is synchrous and it gives a block to all the system because he needs to finish first to liberate the other parts of the code, so always try to make your aplication asynchronous to don't run in this type of problem 
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end('About page')
  }
  res.end('Error page' ) 
})

server.listen(5000, () => {
  console.log('Server is listening on port 5000')
})