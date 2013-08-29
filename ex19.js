#!/usr/bin/env node

var exec = require('child_process').exec
var options = { 
    timeout: 10000, 
    killSignal: 'SIGKILL'
}; 
exec('cat *.js | wc -l', options, function(err stdout, stderr){ 
    //... 
})
