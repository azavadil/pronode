#!/usr/bin/env node

require('http').createServer(function(req, res){
    res.writeHead(200, { 
	'Content-Type': 'text/plain', 
	'Cache-Control': 'max-age=3600'}); 
    
    res.end("The world is mine"); 
    
}).listen(8080); 
