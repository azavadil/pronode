#!/usr/bin/env node

//Creating event emitter

util = require('util'); 

var EventEmitter = require('events').EventEmitter; 

var MyClass = function(){
}


util.inherits(MyClass, EventEmitter); 


// this is how you set up an event emitter on a class

MyClass.prototype.someMethod = function(){ 
    this.emit('customevent', 'selena gomez', 'amber heard'); 
}; 


// this is how you would call the event

var myInstance = new MyClass(); 

myInstance.on('customevent', function(str1, str2){ 
    console.log('got a custom event with the str1 %s and str2 %s!', str1, str2); 
}); 


myInstance.someMethod(); 

