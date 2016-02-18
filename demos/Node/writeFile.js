const fs = require('fs');
const argv = process.argv;

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

copy(argv[2], argv[3]);
