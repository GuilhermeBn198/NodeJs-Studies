const EventEmitter = require('events')

const customEmitter = new EventEmitter()
//on is used to listen for an event
//emit is used to emit an event

customEmitter.on('response', (name, id)=> {//of course there'll be a callback function too 
  console.log(`data recieved user ${name} with id:${id}`);
}) //this will be listenning to an event called 'response'
customEmitter.on('response', ()=> {
  console.log(`some other logic here` );
})

customEmitter.emit('response', 'john', 34) //this event can have whatever name you want it but you need to match its name to other functions such as 'on'