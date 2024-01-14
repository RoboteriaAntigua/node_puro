var http = require('http');
var fs = require('fs');

//Aqui definir las rutas
const routes = [
    { path: "/home", vista: '../EjemploHTML.html' },
    { path: "/formulario", vista: '../Form_ejemplo.HTML' }
];

http.createServer(
    function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let url = req.url;
        routes.forEach(element => {
            if (url == element.path) {
                res.write("hay match\n");
                let archivo = fs.readFileSync(element.vista, 'utf-8');
                res.write(archivo);
            }
        });
        return res.end();
    }).listen(8080);




