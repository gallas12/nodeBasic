/**
 * Created by Milan Gallas on 9.7.2016.
 */
var http = require('http');
var fs = require('fs'); //znázornění html


function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data){
        if(error){
            response.writeHead(404);
            response.write('File not found');
        }else{
            response.write(data);
        }
        //response ukončím až zde ve vnořeném bloku. Ten vnější musí být zakomentován,
        // jinak response končí dřív a nemůžu použít write metodu
        response.end();
    });
    //ukončím hlavní blok
    //response.end();
}

http.createServer(onRequest).listen(8000);
