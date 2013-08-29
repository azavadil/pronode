#!/usr/bin/env node

var spawn = require('child_process').spawn; 

var child = spawn('sleep', ['10']); 

/** 
 * Note: 
 * -----
 * You can also specify which signal to send by passing in
 * a string identifying the signal as the sole argument
 * 
 * child.kill('SIGUSR2'); 
 */

setTimeout (function(){
    child.kill('SIGUSR2'); 
}, 1000); 


child.on('exit', function(code, signal){ 
    if(code){ 
	console.log('child exits with code: ' + code);  
    } else if (signal){
	
	console.log('child exits with sigmal: ' + signal); 
     }
}); 

