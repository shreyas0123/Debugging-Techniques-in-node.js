const http = require('http'); //http module required for creating server

const routes = require('./routes');

//fs stands for File System and it's a built-in Node.js module
//fs module is being used to read from and write to a file named message.txt

//method 1
const server = http.createServer(routes);  //createServer method will create http server, takes call back function consist of arguments such as req,res

//method 2
//console.log(routes.someText);

//const server = http.createServer(routes.handler);


    

server.listen(3000);


