//Las llamadas al sistema, asi denominadas en otros lenguajes
//nos permiten ejecutar comandos o script, o programa agenos.
//Aqui se las llama ejecutar procesos

const exec = require('child_process').exec

//un dir 
exec('ls', (err, stdout) =>{
    if(err){
        throw err;
    }

    console.log('Comando executado!');
    console.log(stdout);	//mostramos la salida del comando ejecutado
});

//un script ajeno con parametros x e y
const x = 10;
const y = 15;

exec('./script.sh ' + x + ' ' + y , (err, stdout) =>{
    if(err){
        throw err;
    }

    console.log('Comando executado!');
    console.log(stdout);	//Mostramos la salida del comando ejecutado
});

/*el script es:
((suma = $1 + $2))

echo "inicio";
echo "la suma es $suma";
*/
