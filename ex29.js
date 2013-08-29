#!/usr/bin/env node

var fs = require('fs'); 

var ws = fs.createWriteStream('./write.txt'); 

ws.write('this is an UTF-8 string'); 

ws.on('drain', function(){ 
    console.log('drain emitted'); 
}); 

