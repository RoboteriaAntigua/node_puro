var express = require('express');
var adminRouter = express.Router();


//Mas abajo esta anclada la raiz en /admin
adminRouter.get('/', function(req, res) {
    res.send('¡Soy el home');
   });


   //Para la ruta /admin/posts
adminRouter.get('/posts', function(req, res) { 
    res.send('¡Muestro todos los posts!');
   });

module.exports = adminRouter;