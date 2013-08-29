#!/usr/bin/env node


var child_process = require('child_process'); 


var exec = child_process.exec
exec('ls',  function(err, stdout, stderr){ 
    if(err){
	console.log('child process exited with error code', err.code); 
	return; 
    } 
    console.log(stdout); 
}); 


    
