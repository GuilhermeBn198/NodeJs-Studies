//commonJS, every file is module(by default)
//modules - Encapsulated Code (only share minimun)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade'); //we can invoke and excecute a function of another  module without attributting it to a variable in this module




// console.log('---------------')
// sayHi('guilherme')
// sayHi('gustavo')
// sayHi(names.nome2)
// sayHi(names.nome3)
// console.log('---------------')