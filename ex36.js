#!/usr/bin/env node

require('http').createServer(function(req, res){ 
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    res.end(req.url); 
}).listen(8080) ; 

