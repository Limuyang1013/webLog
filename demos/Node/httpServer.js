const http = require('http');
const argv = process.argv;

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     res.write('<h1>Hello Node.js!</h1>');
//     res.end('Done.')
// });

const server = new http.Server();

server.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write('<h1>Hello Node.js!</h1>');
    res.end('Done.')
});

server.listen(argv[2]);

console.log(`HTTP server is listening: ${argv[2]}`);
