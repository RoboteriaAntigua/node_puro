//crear directorios tipo mkdir

const fs = require('fs');

/*Crear carpeta de forma sincrono
fs.mkdirSync('carpeta_nueva_borrar');
*/

/*forma asyncrono
fs.mkdir('otra_carpeta', function(err){
				if (err) {throw('Error: '+err);}
}
*/


//con comprobacion de existencia
if(fs.existsSync('carpeta_nueva')){
	console.log("ya existe la carpeta");
}else{
	fs.mkdirSync('carpeta_nueva');
	console.log("carpeta creada con exito");
}
