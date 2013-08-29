#!/usr/bin/env node

var path = require('path'); 

var res = path.normalize('foo/bar//baz/asdf/zuxx/..');

console.log(res); 

var p2 = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'); 
console.log(p2); 

var p3 = path.resolve('/foo/bar', './baz'); 
var p4 = path.resolve('foo/bar/', '/tmp/file/'); 


console.log(p3, p4); 


var p5 = path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'); 
console.log(p5); 

var p6 = path.relative('/home/ubuntu/bitstarter', '/home/ubuntu/pronode'); 
console.log(p6); 

var p7 = path.dirname('/foo/bar/baz/asdf/quux.txt'); 
console.log('dirname: ' + p7); 

var p8 = path.basename('/foo/bar/baz/asdf/quux.txt'); 
console.log('basename: ' + p8); 


var p9 = path.basename('/foo/bar/baz/asdf/quux.txt', '.txt');
console.log('basename, extension removed: ' + p9); 

var p10 = path.extname('/foo/bar/baz/asdf/quux.txt');
console.log('extname: ' + p10); 


path.exists('/home/ubuntu', function(exists){ 
    console.log('exists: ', exists); 
}); 

path.exists('/does_not_exist', function(exists){
    console.log('exists: ', exists); 
}); 



