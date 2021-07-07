//general settings for PATH modules
const path = require('path') 
console.log(path.sep) //this method return a platform specific separator, in windows case we use "/"

const  filePath = path.join('/content', '/subfolder', 'test.txt') //this is a method which show us the pathform of a file, and even if we put another separator bettwen arguments it'll remove automatically
console.log(filePath)

const base = path.basename(filePath) //this method only returns the base name of a path
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder','test.txt') //this method will return the absolute path of the file you're putting in the arguments
console.log(absolute)