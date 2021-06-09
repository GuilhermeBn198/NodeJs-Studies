//general settings for OS MODULES
const os = require('os') //in this case, that is a built in module of the node, you don't need to use ./
/*we can acess its functions invoking directly through the variable atributted to it or use a especific one using const {} = require('os')*/ 


//info about current user
const user = os.userInfo()
console.log(user) //so we can see whats inside the user
//method to get the uptime of the sistem in seconds
console.log(`the system uptime is ${os.uptime} seconds`)

const currentOS =  {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
//methods which we can acquire cool info about the Operational System
console.log(currentOS)