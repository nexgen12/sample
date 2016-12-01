var http = require('http');

http.createServer(function(request, response) {

response.writeHead(200);

response.write("Thisis Test Web!!");

response.end();

}).listen(3000);

console.log('http://localhost:3000/');

