#!/usr/bin/env node

//multiple event listeners

readStream.on("data", function(data){
    console.log("I have some data. 1st event listener"); 
}); 

readStream.on("data", function(data){ 
    console.log("I have data again. 2nd event listener"); 
}); 

readStream.on("data", function(data){ 
    throw new Error("Something went wrong"); 
}); 



/**
 * this doesn't get invoked because of error thrown by prior 
 * listener
 */ 

readStream.on("data", function(data){
    console.log('I have some data here too'); 
}); 



function receiveData(data) {
    console.log("got data from file read stream: %j", data); 
}
readStream.on("data", receiveData); 
//...
//note that callback function must match

readStream.removeListener("data", receiveData); 

