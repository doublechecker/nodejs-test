const { createServer } = require('node:http');

// get the port from the environment variable
const port = process.env.PORT || 3000;

const server = createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
}).listen(port);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});