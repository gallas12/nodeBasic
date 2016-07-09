/**
 * Created by Milan Gallas on 9.7.2016.
 */
var http = require('http'); //nahraji http modul
var module1 = require('./module1'); //importuji soubor module1.js
var module2 = require('./module2'); //importuji soubor module1.js




http.createServer(
    function onRequest(request, response){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(module2.maVariable); //vypíšu proměnou z mého modulu
        module1.myFunction(); //zavolám funkci pro logování
        response.end();
    }
).listen(8000);