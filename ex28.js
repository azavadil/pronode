#!/usr/bin/env node

var fs = require('fs'); 
var rs = fs.createReadStream('./temp.txt'); 

rs.on('data', function(data){ 
    console.log('got this data: ', data); 
}); 

rs.on('end', function(){ 
    console.log('the stream has ended!!'); 
}); 

