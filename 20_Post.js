var http = require('http');
var fs = require('fs');

let archivo = fs.readFileSync('./Form_ejemplo_post.HTML', 'utf-8');


/*creamos el server que recibe la info, 
una respuesta a un clasico get es el archivo index en cuestion
en este caso form_ejemplo_post.html

tambien preguntamos si la peticion de hacer algo que recibe el server es de tipopost, en ese caso significa que tenemos data enviada por el user!
	*/
http.createServer(function (peticion, respuesta) {
	respuesta.writeHead(200, { 'Content-Type': 'text/html' });
	respuesta.write("algo\n");
	//mostramos el archivo Form_ejemplo en el host
	respuesta.write(archivo);
	respuesta.end();
	if (peticion.method == 'POST') {
		console.log('se ha producido una peticion al servidor del tipo post, en realidad se han cargado y enviado datos al server');

	}
}).listen(3000);


