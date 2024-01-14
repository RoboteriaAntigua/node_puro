/* Crear router casero */

/* 
1 guardar en un arreglo asociativo(php) o hashmap(java) las rutas en key/values -> url/nombre_archivo.html

2 monto servidor http

3- pregunto si la url actual (req.url) coincide con url del arreglo, hacer filehandling con archivo y mostrar en el http

Nota: Funciona solo para solicitudes tipo get, hay que agregar el methodo y un poco mas de codigo
*/


var http = require('http');
var fs = require('fs'); 

//El arreglo routes:
const routes=[
    {path:"/home", vista:'./EjemploHTML.html'},
    {path:"/formulario", vista:'./Form_ejemplo.HTML'}
];


//Creo el server

http.createServer(
    function (req,res) {

        //Escribo cabecera para poder renderizar html
        res.writeHead(200, { 'Content-Type': 'text/html' });

        //pregunto que url hay
        let url=req.url;
        
            //res.write("servidor funcionando, la url es:"+url+'\n'); //debug

            //En base a esa url comparo con el arreglo routes
        routes.forEach(element => {
            //res.write("el arreglo esta asi: path:"+element.path + " vista:"+element.vista+"\n");  //debug del arreglo
            if(url==element.path){
                res.write("hay match\n");
                let archivo = fs.readFileSync(element.vista, 'utf-8');
                res.write(archivo);
            }
        });		
            return res.end(); 
    }).listen(8080);

   

    
