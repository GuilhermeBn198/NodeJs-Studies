// npm - global command comes with nodejs
// npm --v to see its version

// local dependency - use it only in this particular project
// npm i <packageName> to acquire an external dependency only to this project

//but we can install it globally to use in any project
//with npm install -g <packageName>
//sudo npm install -g <packageName>(mac)

// package.json - manifest file(stores important info about project/package)

// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

//this is different from the built in modules or node packages, the external ones you'll always need to install it before using, if we don't install the dependency node won't be able to find it 
const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items) //used to transform this array of objects in an normal array
console.log(newItems)