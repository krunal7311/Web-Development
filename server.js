//Load Express Library
//Express is a Node.js web application framwork that allows to set up a local http server. 
var express = require('express');


//app is an instance varialble for express function inside the express package.
var app = express();


//Map all the in coming static requests (html/css etc) to the public directorty. 
app.use(express.static(__dirname +'/public'))


//If the server gets a request on root node, run the function. 
//first object(req) is to read and second object(res) is to send back response. 

app.get("/", function(req,res){
res.send("Hello how are you ? This works. Yay") 
   });

//Creating a server that listens at particular port.
app.listen(3000);