/**
 * Created by Milan Gallas on 9.7.2016.
 */
function myFunction(){
    console.log('function was called');
}

var myString = 'String!';

//exportuji moji metodu a proměnou, abych mohl vyuřít v app.js jako modul
module.exports.myFunction = myFunction;
module.exports.myString = myString;

