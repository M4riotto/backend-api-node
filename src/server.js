const http = require("http");

const host = 'localhost';
const port = 3306;


const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Hello, World!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`servidor esta rodando no http://${host}:${port}`);
});