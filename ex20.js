#!/usr/bin/env node

var env = process.env, 
    varName, 
    envCopy = {}, 
    exec = require('child_process').exec; 

for (varName in env){ 
    envCopy[varName] = env[varName]; 
}

envCopy['CUSTOM_ENV_VAR'] = 'some value'; 
envCopy['CUSTOM_ENV_VAR2'] = 'some other value'; 

exec('ls -la', {env: envCopy}, function(err, stdout, stderr){
    if(err) { throw err; }
    console.log('stdout: ', stdout); 
    console.log('stderr: ', stderr); 
}); 
