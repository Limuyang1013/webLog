const eventEmitter = require('events').EventEmitter;
const event = new eventEmitter();

event.on('myEvents', () => {
    console.log('Hello World!');
});

setTimeout(() => {
    event.emit('myEvents');
}, 3000);
