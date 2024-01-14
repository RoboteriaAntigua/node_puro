var express = require('express');
var app = express();
var adminRouter = require('./4_middleware_intro');
/*
Route middleware en Express es una forma de hacer algo antes de que una 
petición se procese. Este algo podrían ser cosas como comprobar 
si un usuario se ha autentificado (logueado con su cuenta por ejemplo)*/

app.use('/punto_inicial', adminRouter);


//Creando el servidor
app.listen(3000, function(peticion,respuesta){
        console.log("servidor iniciado o reiniciado");
});
