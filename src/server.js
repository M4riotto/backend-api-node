const http = require('node:http');//criar um server dev

const host = 'localhost';
const port = 3308;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
});