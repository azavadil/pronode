#!/usr/bin/env node

var fs = require('fs'); 
fs.readFile('./temp.txt', function(err, fileContent){ 
    if(err) { throw err; }
    console.log('file content', fileContent.toString()); 
}); 

