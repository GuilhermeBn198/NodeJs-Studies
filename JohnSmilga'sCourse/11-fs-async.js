//there's two tipes of file modules, async and sync, the first one blocking and the other non blocking
//in the future they'll be approached
//in this file it'll be approached the async one
const { readFile, writeFile } = require('fs')
//in this case we need to provide a callback which is runned whenever a functionality is completed

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => { //this method functions with the first argument being the filename, the second one is the encoding type (ex: utf8) and the third one is the callback function
    
    if (err) { //if theres an error then
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) { //if theres an error then
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `here is the result of the writefile in 11-fs-async.js:  ${first}, ${second}`, (err, result) =>{
            if (err) {
                console.log(err)
                return
            }
            console.log('done with this task');
        })
    })
})
console.log('starting the next task'); //comparing with the synchronized file system module, we can notice that this async version is much more node/server friendly  'cause the server don't entirely stop for one task until it finishes, idk. whenever the task imediately initiates, node automatically off-load the task and run the next one, although the code for this method is much more polluted, alternatives to this is using promises and async-await