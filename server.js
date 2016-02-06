//Lets require/import the HTTP module
// var http = require('http');
// var index = 'www/index.html'

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/www')).listen(8080);
console.log('listening...');
