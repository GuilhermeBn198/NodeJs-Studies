const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => { //simple method but very manually done
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })
  res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => { //dinamically good way using route params
  // console.log(req)
  // console.log(req.params)
  	const { productID } = req.params

  	const singleProduct = products.find((product) => product.id === Number(productID))
  	if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }
  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => { 
  console.log(req.params)
  res.send('hello world')
})

//url params is small bits of information that we can pass to the server through the URL
//in this case we are demonstrating its use in the search function
//example: localhost/api/v1/search?query=foo&id=12312&name=john   <-- everything after the ? doesn't exist in the domain it's just a way to pass information to the server in a search
app.get('/api/v1/query', (req, res) => {
   //console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ success: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
