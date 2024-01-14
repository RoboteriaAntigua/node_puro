//El Modulo HTTP

const http = require('http');
const fs =require('fs');



//Leo de un servidor, leo un JSON en /var/www/HTML/datos1.json (mi servidor web apache2)

const options = {
    hostname: 'localhost',
    port:80,
    path: 'http://192.168.43.17/datos1.json',
    method: 'GET'
    };

//solicitud guardada como objeto llamado req,
//ejecuta la callback /funcion/ llamada res, 
//muestro en consola el status aver, si todo salio bien, y los headers
const req = http.request(options, res => {
            console.log(`status code: ${res.statusCode}`);
            console.log('headers: %j', res.headers);
             });
req.on('error', err => {});
req.end();

//Igual pero creo eventos que muestren el JSON en consola, y lo hacen como stream
/*const req = http.request(options, res => {
            console.log(`status code: ${res.statusCode}`);
            console.log('headers: %j', res.headers);
            //guardo como stream en una variable
            let body='';
            res.on('data',chunk=>{
                body += chunk;
                });
            res.on('end', end =>{
            console.log(body);
            });
            });
req.on('error', err => {});
req.end();
*/
