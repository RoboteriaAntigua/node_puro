var express = require('express');
var adminRouter = express.Router();


//Mas abajo esta anclada la raiz en /admin
adminRouter.get('/', function(req, res) {
    res.send('¡Soy el home');
   });


   /*Funcion middleware que se ejecuta antes de seguir con el ruteo*/
function miMiddleware(req,res,next){
    //Aqui pasan cosas como comparar tokens y etc
    next();
 }
 
 //Ruta que ejecuta middleware primero
 adminRouter.get('/posts',miMiddleware,function(req,res){
    /* Se ejecutará esta función luego del middleware */
    res.send('¡Muestro todos los posts cuando el middleware termine!');
 });

module.exports = adminRouter;