/*const mate= require("./mate.js");
console.log(mate);
console.log(mate.add(2,3));
console.log(mate.substract(2,3));
console.log(mate.multiply(2,3));
console.log(mate.divide(2,3));*/

/*
const os = require('os');
console.log("free mem "+os.freemem());*/


const fs = require('fs');
/*
fs.writeFile("./Texto.txt","texto 1",function(err){
   if(err){
       console.log("error");
   }
   console.log("archivo creado");
});

console.log("ultima linea");*/

/*fs.readFile("./texto.txt",function(err,data){
    if(err){
        console.log("error");
    }
    console.log(data.toString());
});*/

const http = require('http');
const handleServer = function(request,response){
    response.writeHead(404,{"content-type": "text/html"});
    response.write("<h1>hola mundo</h1>");
    response.write("texto simple");
    response.end();
 }
const server = http.createServer(handleServer);

server.listen(3000, function (){
    console.log("Server en puerto 3000");
});











