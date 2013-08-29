#!/usr/bin/env node

var fs = require('fs'); 


fs.stat('/home/ubuntu', function(err, stats){ 
    if(err){throw err; }
    console.log(stats); 
}); 

