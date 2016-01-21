var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello JML from the fabric8 NodeJS example');
}).listen(8080);
console.log('JML Server running at http://localhost:8080/');
