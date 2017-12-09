const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {

  res.end('Hello, world!');

}).listen(3000);
