const fs = require('fs');
const args = process.argv;

function copy(src, dist) {
    fs.readFile(src, 'utf8', (err, data) => {
        fs.writeFile(dist, data, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Done.');
            }
        })
    });
};

copy(args[2], args[3]);
