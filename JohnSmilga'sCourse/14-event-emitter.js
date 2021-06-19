const EventEmitter = require('events')
// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const customEmitter = new EventEmitter()
// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it
customEmitter.on('response', (name, id)=> {//of course there'll be a callback function too 
  console.log(`data recieved user ${name} with id:${id}`);
}) //this will be listenning to an event called 'response'
customEmitter.on('response', ()=> {
  console.log(`some other logic here` );
})

customEmitter.emit('response', 'john', 34) //this event can have whatever name you want it but you need to match its name to other functions such as 'on'




