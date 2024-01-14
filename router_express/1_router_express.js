var express = require('express');
var app = express();
var adminRouter = express.Router();


//Mas abajo esta anclada la raiz en /admin
adminRouter.get('/', function(req, res) {
    res.send('¡Soy el panel de administración!');
   });


   //Para la ruta /admin/posts
adminRouter.get('/posts', function(req, res) { 
    res.send('¡Muestro todos los posts!');
   });

   //Este manejador aplica a toda url que comience con /admin
app.use('/admin', adminRouter);

//Creando el servidor
app.listen(3000, function(peticion,respuesta){
        console.log("servidor iniciado o reiniciado");
});
