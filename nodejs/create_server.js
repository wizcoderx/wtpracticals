var http = require('http');
var server = http.createServer(function(req, res) {
res.write("Hello Server");
res.end();
});
server.listen(5100);
console.log('Node.js web server is activate check the port 5100');

//Handing http request:

var http = require('http');
var server = http.createServer(function (req, res) {
if (req.url == '/') {
res.writeHead(200, { 'Content-type': 'text/html' });
res.write('<html><body><p>This is the home page.</p></body></html>');
res.end();
} else if (req.url == "/student") {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write('<html><body><p>This is the student page.</p></body></html>');
res.end();
} else if (req.url == "/admin") {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write('<html><body><p>This is the admin page.</p></body></html>');
res.end();
} else {
res.end('Invalid Request!');
}
});
server.listen(5000);
console.log('Node.js web server at port 5000 is running...');