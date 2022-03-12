const logger = (req, res, next)  => {
	const method = req.method
	const url = req.url
	const time = new Date().getFullYear()
	console.Console(method, url, time)
	next()
}

module.exports = logger