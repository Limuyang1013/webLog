const fs = require('fs');

fs.readFile('./files/readme.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log('END');
