//Eventos en lado servidor

/*Node como interprete esta orientado a eventos, casi todo dispara
  un evento.
*/

//Modulos para los ejemplos
var fs = require('fs');



/*Cuando readStream abre un archivo, crea un evento:
 Luego podemos hacer que dicho evento, dispare una funcion o al metodo 
 de algun objeto, con:
 lalala.on('tipo_evento', funcion(){}) */
var readStream = fs.createReadStream('./EjemploHTML');
readStream.on('open', function () { console.log('abiertoo'); });





//Modulo eventos
var events = require('events');

/* Ademas de los eventos que disparan casi todos los metodos,
podemos crear eventos propios, luego con .on los disparamos y con ellos
a una funcion dada, o a un metodo de algun objeto. */

//creo un emmisor de eventos, una clase
var emisorEventos = new events.EventEmitter();

//objeto con atributo
var objeto_con_atributo = function () { console.log('atributo/metodo'); }


//asigno el evento al objeto
emisorEventos.on('eventoChe', objeto_con_atributo);

//disparo el evento
emisorEventos.emit('eventoChe');

//Utiles para streams, que veremos mas adelante

//Se trata de crear objetos-eventos, que se "emiten" cuando uno disponga


/* otra forma
//creo clase EmisorEventos
var EmisorEventos = eventos_modulo.EventEmitter;

//creo objeto de la clase, o sea un evento-objeto
var ee_obj = new EmisorEventos();

//El atributo .on , crea un evento y lo asocia con una funcion
//ee_oj.on ('evento_name',funcion(){});
ee_obj.on('evento1', function(par1){ console.log(par1);});

//Emito el evento
//ee_obj.emit('evento_name', parametro); emito el evento
//Con set Iterval, disparo una funcion emit,  cada 3 segundos
//paso  parametro=55;
setInterval(function(){ee_obj.emit('evento1', 55)}, 3000);
*/
