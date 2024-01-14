var express = require('express');
var app = express();
var adminRouter = require('./1_router_aparte.js');

   //Este manejador aplica a toda url que comience con /
app.use('/', adminRouter);



//---------------- El motor de plantillas ejs -------------------------------------------//
app.set('view engine', 'ejs');  //Le decimos que motor usamos
//Le decimos a donde estan las vistas
app.set('views', __dirname+'/vistas'); //o sino: app.set('views', './vistas');  

//-------------------------------------------------------------------------------------//


//----------------------Defino donde estan los estaticos----------------
//Los archivos estaticos como .html y .css
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//Creando el servidor
app.listen(3000, function(peticion,respuesta){
        console.log("servidor iniciado o reiniciado");
});
