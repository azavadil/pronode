#!/usr/bin/env node

var http = require('http'); 

var server = http.createServer(); 


/** 
 *   Note: 
 *   -----
 *   Replaced with shorter version
 * 
 *   server.on('request', function(req, res){ 
 *   res.writeHead(200, {'Content-Type': 'text/plain'}); 
 *   res.write('Hello World I\'m here'); 
 *   res.end(); 
 *   }); 
 *
 *   server.listen(8080);
 */


require('http').createServer(function(req, res){ 
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    res.end('The world is mine'); 
}).listen(8080); 

