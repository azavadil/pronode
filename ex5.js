#!/usr/bin/env node

function receiveData(data){
    console.log("got data from file read stream: %j", data); 
}
readStream.addListener("data", receiveData); 



/**
 * alternate versions:
 * -------------------
 * readStream.on("data", receiveData); 
 * 
 * 
 * readStream.on("data", function(data){ 
 *   console.log("got data from file read stream: %j", data); 
 * }) ; 
 */ 
