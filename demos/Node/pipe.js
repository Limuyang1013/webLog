const fs = require('fs');
const argv = process.argv;

function copy(src, dist) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dist));
};

copy(argv[2], argv[3]);
