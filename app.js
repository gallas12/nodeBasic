/**
 * Created by Milan Gallas on 9.7.2016.
 */
var http = require('http');
var server = require('./server.js');

http.createServer(server.handleRequest).listen(8000);
