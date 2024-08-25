const logEvents = require ('./logevents')

const EventEmiiter = require('events');

class MyEmitter extends EventEmiiter{}

const myEmitter = new MyEmitter();
myEmitter.on('log',(msg)=>{ //on - on is a keyword its listeing a events
    logEvents(msg);
})

myEmitter.emit('log','log event emitted')