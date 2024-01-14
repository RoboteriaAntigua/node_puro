var express = require('express');

var app = express();

app.get('/', function (peticion,respuesta){
    respuesta.send("<h1>Codigo html renderizado desde express</h1>");
});

app.get('/contacto', function (peticion,respuesta){
    respuesta.send("<h1>Contacto</h1>");
});

//Creando el servidor
app.listen(3000, function(peticion,respuesta){
        console.log("servidor iniciado o reiniciado");
});
