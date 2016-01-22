var http = require('http');
for (var item in process.env) 
console.log(item," = ",process.env[item]);
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<H1>Node Envvars</H1>");
  res.write("<table>");
for (var item in process.env) 
  res.write("<TR><TD>"+item+"</TD><TD>"+process.env[item]+"</TD></TR>");
  res.write("</table>");
  res.end();
}).listen(8080);
console.log('JML Server running at http://localhost:8080/');
