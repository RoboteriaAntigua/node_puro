var express = require('express');
var app = express();
var adminRouter = require('./2_router_aparte.js');

   //Este manejador aplica a toda url que comience con /punto_inicial
app.use('/punto_inicial', adminRouter);

//Creando el servidor
app.listen(3000, function(peticion,respuesta){
        console.log("servidor iniciado o reiniciado");
});
