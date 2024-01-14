//HTTP como servidor web
//Importamos los modulos
var fs = require('fs');
var http = require('http');

/*createServer( function (req,res) {} ).listen(8080);
Este objeto mediante el evento .createServer() escuchará y ejecutará una función 
cada vez que un cliente se conecte al servidor:
La funcion callback mandandole,
automaticamente dos parametros callback(req,res)  o sea(requerido,respuesta)
*/
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>aqui renderizando codigo html, fundamental para ello las cabeceras (writeHead) </h3>");
  res.end();
}).listen(8080); 


//Abriendo un archivo y creando el servidor web con un archivo existente
//Abro el Ejemplo2 y guardo su contenido en texto
let archivo = fs.readFileSync('./Ejemplo2', 'utf-8');
/*createServer( function (req,res) {} ).listen(8080);
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(archivo);   //Escribo el texto del 'archivo' en el server, http//ip_del_server:8080
  res.end();
}).listen(8080); */



/*otra forma (asyncrono)
http.createServer(
                function (req,res) {
                        fs.readFile('./EjemploHTML', function (err, data){
                                res.writeHead(200,{'Content-Type':'text/html'});                        
                                res.write(data);
                                return res.end(); });
                }).listen(8080);
*/
