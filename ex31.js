#!/usr/bin/env node


require('http').createServer(function(req, res){ 
    var rs = fs.createReadStream('./temp.txt'); 
    
    rs.pipe( res, {end: false}); 

    res.on('end', function(){ 
	res.write("And that's all folks!"); 
	res.end(); 
    }); 
}).listen(8080); 



