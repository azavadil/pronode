#!/usr/bin/env node

//

function receiveData(data){
    console.log("got data from file read stream: %j", data); 
}); 

readStream.once("data", receiveData); 
