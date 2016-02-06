//Lets require/import the HTTP module
// var http = require('http');
// var index = 'www/index.html'

var connect = require('connect');
var serveStatic = require('serve-static');
var port = Number(process.env.PORT || 8080);
connect().use(serveStatic(__dirname + '/www')).listen(port);
console.log('listening...');
