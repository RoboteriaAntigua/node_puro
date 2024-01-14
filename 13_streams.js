//Streams
/* Se trata de mandar un archivo grande en pedacitos, e ir mostrandolo,
 * en la medida que lo vamos leyendo. En lugar de tener que esperar a que
 * cargue todo, para poder verlo. */

const fs = require('fs');



//-------------leer streams ------------------------//
//Sin streams hariamos asi, en caso de un archivo muy grande nos volvemos locos
// let contenido = fs.readFileSync('./logs.log');
// console.log(contenido);


//con stream
let stream = fs.createReadStream('./EjemploHTML', 'utf-8');

let recibido_var = '';

//La funcion chunk(pedazo), en la medida que va leyendo se tira por pantalla
stream.on('data', (chunk) => {
	recibido_var +=chunk;
	console.log(recibido_var);
});




//---------------Escribir streams------------------------------//
//lee texto del EjemploHTML y lo vuelca en un archivo llamado file2.txt
//esto lo hace de a pedacitos (stream), en la medida que va leyendo
var read_Stream = fs.createReadStream('./EjemploHTML');
var write_Stream = fs.createWriteStream('./file2.txt');

read_Stream.setEncoding('utf8');

read_Stream.on('data', function(chunk) {
    write_Stream.write(chunk);
});
