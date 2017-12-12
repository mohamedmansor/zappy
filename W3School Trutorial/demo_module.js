var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("The Date and Time Now is : " + dt.myDateTime());
    res.end('hello world!');
}).listen(8080);