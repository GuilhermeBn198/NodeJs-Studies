const { createReadStream } = require('fs')
//streams are used to read or write sequentially, when we have to manipulate big data, streaming or something like that we use streams

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

const stream = createReadStream('./content/big.txt')
stream.on('data', (result) => {
  console.log(result) //this console log will present the amount of data the big.txt have, but presented in chunks of 64kb by default, in the case of big.txt there'll be 2 chunks of 64kb and 1 remaining chunk of 34kb
})
stream.on('error', (err) => console.log(err))