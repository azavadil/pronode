#!/usr/bin/env node

var fs = require('fs'); 
fs.open('/home/ubuntu/pronode/test.txt', 'r', function(err, fs){ 
    console.log('got fd file descriptor'); 
}); 

