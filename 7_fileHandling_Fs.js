//Importamos el modulo fs
/*El modulo fs sirve para 
	
    Read files
    Create files
    Update files
    Delete files
    Rename files
    move   file
*/
var fs = require('fs');
var http = require('http');


//Read sencillo
//Sincrono (podemos dispensar de la callback
let archivo = fs.readFileSync('./EjemploHTML', 'utf-8');
console.log(archivo);

//Escribiendo la salida en el navegador (en realidad seria una respuesta del server web con tu ip):
http.createServer(
		function (req,res) {
			fs.readFileSync('./EjemploHTML', 'utf-8');			
				res.write(archivo);
				return res.end(); 
		}).listen(8080);

/*sobre readfile asyncronico: readfilke('archivo',tipo,callback(err,data)
Automaticamente este atributo (readfile) manda dos parametros a la funcion callback, 
uno (err) es el codigo de estatus en caso de error (404) y el
el otro el archivo abierto en cuesion (data)
Por ende despues podemos usar .write(data) como si existiera una variable
lo mismo que hacer: let data = readFile()
*/


//Leer asyncrono con error y escribiendo la salida en el navegador
//fs.readFile(archivo [, options], callback)
/*http.createServer(
		function (req,res) {
			fs.readFile('./EjemploHTML', function (err, data){
				res.writeHead(200,{'Content-Type':'text/html'});			
				res.write(data);
				return res.end(); });
		}).listen(8080);
		*/
		
		
//crear archivo
/*
//sincrono es sin la callback
fs.appendFileSync('nuevoarchivo.json',string);

//asyncrono
fs.appendFile('nuevoArchivo.JSON', 'contenido', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 
*/


//Escribir archivo
// WriteFile() sobre escribe un archivo existente, si no existe lo crea

//sincrono 
//fs.writeFileSync('mynewfile3.txt',string);

//asyncrono
//fs.writeFile('mynewfile3.txt', string, callback () {} ); 
/*fs.writeFile('mynewfile3.txt', string, function (err) {
  if (err) throw err;
  console.log('Saved!');
});




*/
//Open file es similar al filehandling de otros lenguajes
/*fs.open('nuevoFileHandling.txt','w',function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
*/



//appendFile() agrega al final de un archivo existente
/*
fs.appendFile('nuevoFileHandling.txt', ' agregado al final.', function (err) {
  if (err) throw err;
  console.log('Updated!');
}); 



*/
//Delete file asyncrono
/*
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
}); */



/*Rename Files asyncrono
 * fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
}); */


/*move files, es con rename, asyncronica
const fs = require('fs');
fs.rename('./archivo_actual.txt', './otraruta/archivo_actual.txt', (err) => {
    if(err){
        throw(err);
    }
    console.log('O arquivo foi movido com sucesso!');
})
*/
