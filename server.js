/**
 * Created by Milan Gallas on 9.7.2016.
 */
var http = require('http');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello world');
    response.end();
}

http.createServer(onRequest).listen(8000);