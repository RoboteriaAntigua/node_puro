var http = require('http');
var fs = require('fs');
var url = require('url');
let archivo = fs.readFileSync('./Form_ejemplo_post.HTML', 'utf-8');

/*Este modulo es para pasar de sring a objeto 
(util para recuperar info con post) */
var querystring = require('querystring');
var dataString = '';

/*creamos el server que recibe la info, 
una respuesta a un clasico get es el archivo index en cuestion
en este caso form_ejemplo_post.html

tambien preguntamos si la peticion de hacer algo que recibe el server es de tipopost, en ese caso significa que tenemos data enviada por el user!
	*/
http.createServer(function (peticion, respuesta) {
	respuesta.writeHead(200, { 'Content-Type': 'text/html' });
	//mostramos el archivo Form_ejemplo en el host
	respuesta.write(archivo);
	respuesta.end();
	if (peticion.method == 'POST') {
		console.log('peticion al server del tipo post');
		//recuperar los datos
		//Si hay datos entrantes por POST los guardo en dataString
		peticion.on('data', function (data) {
			dataString += data;
		});
		//Cuando terminaron de llegar ejecuto callback
		peticion.on('end', function () {
			console.log(`recuperado ${dataString}`);
			//lo convierto a un objeto
			var parseado = querystring.parse(dataString);
			console.log(`el nombre es ${parseado.Nombre}`);
		});

	}
}).listen(3000);


