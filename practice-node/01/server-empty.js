const {Server} = require('http');

// same as http.createServer((req, res) => ...)
const server = new Server(); // init server

server.on('request', (req, res) => { 
  // empty
  debugger;
  res.end('hello'); 
});

server.listen(8000); 
