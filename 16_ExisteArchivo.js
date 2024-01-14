//Evento fs.exists (ruta_archivo, callback(err, true){});
//Pregunta si existe el archivo 
//
//Al escribir en el navegador localhost:3000/EjemploHTML 
//Nos abre el EjemploHTML que tenemos en la carpeta actual donde
//se ejecuta node este_script
//Lo hacemos mediante url, para complicarla
//
var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function(peticion, respuesta){
   var parseada = url.parse(peticion.url,true);
   var path_nombre = parseada.pathname;
   var ruta_a_archivo = './' + path_nombre;
   
//fs.exists
  fs.exists(ruta_a_archivo, function(existe){
      if(existe){
         fs.readFileSync(ruta_a_archivo, 'utf-8');
               respuesta.writeHead(200, {'Content-Type': 'text/html'});
	      respuesta.write('data');
	      return respuesta.end()
            }
      else{
         respuesta.writeHead(404, 'text/plain');
         respuesta.end('Error 404. El enlace no existe o ha dejado de existir.');
      }
   });
}).listen(3000);
console.log('El servidor esta funcionando correctamente en https://localhost:3000/');
