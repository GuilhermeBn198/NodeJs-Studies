//there's two tipes of file modules, async and sync, the first one blocking and the other non blocking
//in the future they'll be approached
//in this file it'll be approached the sync one
const {readFileSync, writeFileSync, write} = require('fs')
//const fs = require('fs')
//fs.readFileSync  these two lines are equal to the one above

console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf-8')
//this method can read the content inside the file it have in its first argument, the second argument sets the type of encode
writeFileSync('./content/result-sync.txt', `here is the result of the writefilesync in 10-fs-sync.js:${first}, ${second}`, {flag: 'a' } ) //this method can create a new file in the path presented in the first argument alongside it's content in the second argument. the third argument can pass an object

console.log('done with this task')
console.log('starting the next one')