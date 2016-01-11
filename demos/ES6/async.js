let fs = require('fs');

let readFile = function(fileName) {
    return new Promise(function(succ, fail) {
        fs.readFile(fileName, function(error, data) {
            if (error) {
                fail(error);
            } else {
                succ(data);
            }
        });
    });
};

let asyncRF = async function() {
    let a1 = await readFile('.babelrc'),
        a2 = await readFile('.gitignore');

    console.log(a1.toString());
    console.log(a2.toString());
};

asyncRF();
