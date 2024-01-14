//obteniendo formularios de la url
//variables tipo 'get'

var http = require('http');
var url = require('url');
var fs = require('fs');

//abrimos el archivo form_ejemplo y lo mostramos en el server
let archivo = fs.readFileSync('./Form_ejemplo.HTML', 'utf-8');


//creamos el server que recibe la info
http.createServer(function(peticion, respuesta){
	respuesta.writeHead(200, {'Content-Type':'text/html'});
	//mostramos el archivo Form_ejemplo en el host
	respuesta.write(archivo);
	respuesta.end();	
	
	//parseamos la url
	var parseada =url.parse(peticion.url,true);
	//console.log(parseada.pathname);	

	//pregunto si el url cambio es porque se han ingresado 
	//los datos del formulario!
	  if(parseada.pathname != '/'){
	var parseada2 = url.parse(peticion.url,true);
	var query_obj = parseada2.query;
  	 
   	
//los Formularios deben llevar una variable con su mismo nombre
	var Nombre =query_obj.Nombre;
	var Email = query_obj.Email;
	var Pais = query_obj.Pais;
   console.log("datos obtuvidos de la url");
   console.log("los form son" + Nombre+" "+Email+" "+Pais);
	}
	
}).listen(3000);


console.log('Servidor iniciado.');
