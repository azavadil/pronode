#!/usr/bin/env node

var buf = new Buffer('Hello World'); 

var buf2 = new Buffer('8b76fde713ce', 'base64'); 

var buf3 = new Buffer(1024); 

var buf4 = new Buffer('my buffer content'); 
console.log(buf4[10]); 

buf4[99] = 125; 

 

var buf5 = new Buffer('this is the content of my buffer'); 
var bufSlice = buf5.slice(8,19); 
console.log(bufSlice.toString()); 

var buf6 = new Buffer(11); 

var targetStart = 0; 
var sourceStart = 8; 
var sourceEnd = 19; 

buf5.copy(buf6, targetStart, sourceStart, sourceEnd); 
console.log(buf6.toString()); 


