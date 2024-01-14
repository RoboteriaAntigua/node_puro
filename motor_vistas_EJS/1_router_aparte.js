var express = require('express');
var adminRouter = express.Router();


//Mas abajo esta anclada la raiz en /admin
adminRouter.get('/', function(req, res) 
    {
    //variable title pasada a la vista
    res.render('1_index', { title: 'Indice desde plantilla' });
   });


   //Para la ruta /admin/posts
adminRouter.get('/posts', function(req, res) { 
    res.send('¡Muestro todos los posts!');
   });

module.exports = adminRouter;