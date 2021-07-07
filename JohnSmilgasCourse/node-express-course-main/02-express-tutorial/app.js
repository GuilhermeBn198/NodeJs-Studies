
const { write } = require('fs');
const http = require('http')

const server = http.createServer((req, res)=>{
	console.log("user hit the server");
	res,writeHead(200, {'content-type':'text/html'})
	res.write("<h1>welcome ma boi</h1>")
	res.end
})

server.listen(5000)
