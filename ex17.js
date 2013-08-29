#!/usr/bin/env node

var fs = require('fs'); 
function openAndWriteToSystemLog(writeBuffer, callback){ 
    fs.open('./temp.txt', 'a', function opened(err, fd){ 
	if(err){ return callback(err); } 
	function notifyError(err){ 
	    fs.close(fd, function(){ 
		callback(err); 
	    }); 
	}
    var bufferOffset = 0, 
	bufferLength = writeBuffer.length, 
	filePosition = null; 
    fs.write(fd, writeBuffer, bufferOffset, bufferLength, filePosition, 
	     function wrote(err, written) { 
		 if(err) { return notifyError(err); } 
		 fs.close(fd, function() { 
		     callback(err); 
		 }); 
	     }
	   ); 
     });
}
openAndWriteToSystemLog(
    new Buffer('writing this string'), 
    function done(err){ 
	if(err){ 
	    console.log('error while opening and writing: ', err.message); 
	    return; 
	}
	console.log('All done with no errors'); 
    }
)
