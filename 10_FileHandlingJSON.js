//Importamos el modulo fs
/*Aqui veremos como abrir un JSON, editarlo y volverlo a subir
*/
var fs = require('fs');
var http = require('http');


//Abrimos un JSON y lo convertimos a string
//localmente: 
let archivo = fs.readFileSync('./datos1.json', 'utf-8');
//
//console.log(archivo);

//convierto un texto a un objeto javascript:
const parseado = JSON.parse(archivo);

//Modifico el objeto JS, cambio nombre=cristian por pepe
parseado.nombre="toto";


//Pasamos el objeto a string con stringify
var encadenado= JSON.stringify(parseado);

//Guardo el JSON (reemplazo el contenido si ya existe):
fs.writeFileSync("datos1.json",encadenado); 


/*guardo el JSON pero ASyncronicamente y con comprobacion de error
fs.writeFileSync("datos1.json",encadenado, function (err) {
  if (err) throw err;
  console.log('Saved!');
});*/

/*

//Escribiendo la salida en el navegador (en realidad seria una respuesta del server web con tu ip):
http.createServer(
		function (req,res) {
			fs.readFileSync('./datos1.json', 'utf-8');			
				res.write(archivo);
				return res.end(); 
		}).listen(8080);

*/





