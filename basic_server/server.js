// Require Node's http module
var http = require('http')
// Create a server from the http module
http.createServer(function (request, response) {
  // Set response headers
	response.writeHead(200, {'Content-Type': 'text/html'});
	// Set response 
	response.end('<html><body><h1>Hello World!</h1></body></html>');
})
// Run server on localhost:3000
.listen(3000, 'localhost');