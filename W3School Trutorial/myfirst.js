var http = require('http');

var dt = require('./myfirstmodule');
// create a server object;
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('hello world!');
}).listen(8080);