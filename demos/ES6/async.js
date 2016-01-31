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
    // 注释中的写法存在依赖关系，a2 会在 a1 完成后才触发
    // let a1 = await readFile('.babelrc'),
    //     a2 = await readFile('.gitignore');

    let [a1, a2] = await Promise.all([readFile('.babelrc'), readFile('.gitignore')]);

    console.log(a1.toString());
    console.log(a2.toString());
};

asyncRF();
