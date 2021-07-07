const http = require('http');

const server = http.createServer((req, res) =>{ //(RequestObject, ResponseObject)
    if (req.url === '/') {
        res.end('welcome to our home page') //we can use req.url to send back to client a response object containing a message or a complete html file for example
    }
    if (req.url === '/about') {
        res.end('here is this things history')
    }
    res.end(`
    <h1>OOPSS!!</h1>
    <p> we can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)