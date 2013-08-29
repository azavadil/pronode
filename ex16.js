#!/usr/bin/env node


var fs = require('fs'); 
fs.open('./temp.txt', 'a', function opened(err, fd){ 
    if(err) {throw err; } 
    var writeBuffer = new Buffer('writing this string'), 
        bufferPosition = 0, 
        bufferLength = writeBuffer.length, filePosition = null; 
    fs.write(fd, 
	     writeBuffer, 
	     bufferPosition, 
	     bufferLength, 
	     filePosition, 
	     function wrote(err, written){ 
		 if(err){throw err; } 
		 console.log('wrote' + written + ' bytes'); 
             }); 
}); 
