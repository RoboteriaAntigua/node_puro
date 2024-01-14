//obteniendo formularios de la url
//variables tipo 'get'

var http = require('http');
var url = require('url');


/*En el navegador escribiremos esto en la direccion:
	http://localhost:3000/?productos=zapatos&color=negro&precio=550
	*/

//creamos el server
http.createServer(function(peticion, respuesta){

	//parseamos la url
	var parseada =url.parse(peticion.url,true);
	var query_obj = parseada.query;
   
   	
//los Formularios deben llevar una variable con su mismo nombre
	var productos =query_obj.productos;
	var color = query_obj.color;
	var precio = query_obj.precio;
	respuesta.writeHead(200, {'Content-Type': 'text/html'});
   respuesta.write("datos obtuvidos de la url");
   respuesta.write("los form son" + productos+" "+color+" "+precio);
	respuesta.end();
}).listen(3000, '127.0.0.1');

console.log('Servidor iniciado.');
