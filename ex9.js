#!/usr/bin/env node




/**
 * 
 * var oneSecond = 1000 * 1; 
 * setTimeout(function() { 
 *   document.write('<p>Hello there. </p>' ); 
 * }, oneSecond); 
 *
 *
 * setInterval(function(){ 
 *   document.write('<p>Hello there. </p>'); 
 * }, oneSecond); 
 */ 

var testFn = function(arg1){ console.log(arg1 + ": " + "fn executed");}
 

var timeout_ms = 2000; 

var timeout = setTimeout(function(){ 
    testFn(1); 
}, timeout_ms); 


var to2 = setTimeout(function(){ 
    testFn(2)
}, 2000); 
clearTimeout(to2)

testFn(3)
