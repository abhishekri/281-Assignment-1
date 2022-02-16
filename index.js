var http = require("http");

http.createServer(function (request, response) {

           response.writeHead(200, {'Content-Type': 'text/plain'});

           response.end("<h1>It's working 🤗</h1>");
           
          
          
           
           

}).listen(8080);

console.log('Server Running Successfully');
