#!/usr/bin/env node

var period = 100; 
var interval = setInterval(function(){ 
    console.log('tick'); 
}, period); 

var to = setTimeout(function(){ 
    clearInterval(interval); 
}, 2000); 

/**
 * Note: 
 * -----
 * An alternative deferal mechanism is to use  
 * process.nextTick. Instead of waiting a fixed 
 * amount of time, it waits an event loop cycle
 */ 

process.nextTick(function(){ 
    console.log('this happened in the next event loop cycle'); 
}) ; 
