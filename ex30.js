#!/usr/bin/env node

var fs = require('fs'); 
var path = './temp.txt'; 

var rs = fs.createReadStream(path, {start: 10, end:30 }); 

rs.on('data', function(data){ 
    console.log('got this data: ', data); 
}); 

rs.on('end', function(){ 
    console.log('stream ended'); 
}); 

