const express = require('express')
const path = require('path')
const app = express()


app.get('/', (req, res) => {
	console.log('user hit');
	res.status(200).send('Home Page')
})

app.all('*',(req,res)=>{
	res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
	console.log("server's running at port 5000");
})