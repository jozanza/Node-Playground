// Require http and filesystem modules
var http = require('http')
var fs = require('fs')
// Create a server
http.createServer(function(req,res) {
  fs.readFile('index.html', 'utf8', function(err,data) {
    // Write response headers
    res.writeHead(200,{'Content-Type':'text/html'})
    // Read file and output contents
    if (!err) res.write(data)
    else res.write('Couldn\'t open index.html :(')
    // End response
    res.end()
  })
}).listen(3000,'localhost')
