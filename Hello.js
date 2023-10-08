var http = require('http');
//var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hello Node JS");
  res.write("Second Time Hello Node JS");
  //console.log('Server Started!');
  res.end();
}).listen(3000);