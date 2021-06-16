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
console.log('hello people');

/*
 in a clone of this repository or any other with node package dependencies that aren't available you can install its dependencies through the command 
 **npm install packageName**
 and we have 
 **npm install packageName -D**
  with it, node will automatically install the project dependencies, as for the -D its for installing as a dev-dependency package
 */

/* what kind of dependencies do we install as dev dependencies? for example, testing packages, linting, etc etc. usually while we are creating the app, once its finished we just use it as dependency only, not dev-dep
 */

/*with scripts we can put the automatically restart the app without problems, in our case we are using nodemon to autorun the app, but we'll uninstall this package with *npm uninstall packageName**/

//as for package-lock.json
/* it is used to lock the version of the dependecies, and the packages of the dependecies so the project won't be buggy when a dependency version changes  */



// as for the version in the package.json, it's represented as 3 different types of versions with 0.0.0, the first one is meant to be a change that cannot be backported, an enormous change in the package, se second 0 is for minor changes, that we can expect that your code will run with it even if this number changes, and the last one is for bug fixes.