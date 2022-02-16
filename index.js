var http = require("http");

http.createServer(function (request, response) {

           response.writeHead(200, {'Content-Type': 'text/plain'});

           response.end('Hello World - Application is Working \n');         
           
           document.body.innerText = String.fromCodePoint(0x1F354);
           
           res.send("<h1>It's working 🤗</h1>")
           

}).listen(8080);

console.log('Server Running Successfully');
