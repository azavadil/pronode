#!/usr/bin/env node

var spawn = require('child_process').spawn; 

var child = spawn('ls', ['does_not_exist.txt']); 

child.stdout.on('data', function(data){ 
    console.log('data from child: ' + data); 
}); 

child.on('exit', function(code){ 
    console.log('child process terminated with code ' + code); 
}) ;

