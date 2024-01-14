var http = require('http');
var fs = require('fs');
var url = require('url');

//Aqui definir las rutas
const routes = [
    { path: "/home", vista: '../EjemploHTML.html' },
    { path: "/vista1", vista: './3_vista_parametros_get.html' }
];

//Escribir en la url para probar: http://localhost:8080/vista1?variable=123
http.createServer(
    function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        console.log("servidor iniciado\n");
        routes.forEach(element => {
            if (req.url.search(element.path)!=-1) {
                console.log("Hay match con la url: "+url);
                let archivo = fs.readFileSync(element.vista, 'utf-8');
                res.write(archivo);

                //REcuperar datos del url
                var parseada =url.parse(req.url,true);
                var query_obj = parseada.query;
  	 
   	
            //los Formularios deben llevar una variable con su mismo nombre
            	var variable =query_obj.variable;
                console.log("recuperado el nombre:"+variable);            //REcupere variable de la url
                        }
                //res.write("recuperada la variable:"+variable);
        });
        return res.end();
    }).listen(8080);




