//Objeto process
//atributos stdout.write("") y stdin.on('data',callback(){} )


process.stdout.write("Hola, ingrese, corta: ");

//Un callback para almacenar la info
var nombre;
process.stdin.on('data', function (data) {
			nombre=data.toString();
			//comprobacion:
			process.stdout.write(`ingresaste ${nombre}`);
			process.exit();}); //hay que matar el proceso


