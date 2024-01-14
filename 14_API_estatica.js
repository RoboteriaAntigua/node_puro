/*API estatica
	no hace falta actualizar una base de datos en tiempo real, 
	no hace falta una conexion de base de datos, se usa GET y POST nomas
	REST (epresentational state transfer)
	*/

/*parametro req del createServer
 * req.url retorna la url actual
 */

const http = require('http');

const pedidos = [
    {'nombre': 'sopa', 'quantidade': 2, 'estado': 'servido', 'mesa': 5},
    {'nombre': 'corte de carne', 'quantidade': 2, 'estado': 'proceso', 'mesa': 4},
    {'nombre': 'sopa', 'quantidade': 1, 'estado': 'pago', 'mesa': 3},
    {'nombre': 'salada', 'quantidade': 1, 'estado': 'pago', 'mesa': 5},
    {'nombre': 'massa', 'quantidade': 4, 'estado': 'proceso', 'mesa': 1},
];

http.createServer((req, res) =>{
    //si la url es index, muestro el JSON pedidos completo
	if(req.url == '/'){			
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(JSON.stringify(pedidos));
    }
	//Si es /pedidos-proceso
	else if(req.url == '/pedidos-estado-proceso'){
        pedidosEnProceso(res);
	
	//si son pedidos de sopa
    }else if(req.url == '/pedidos-nombre-sopa'){
        pedidosPorNombre('sopa', res);
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Não encontrada a requisição requerida','latin1');
    }

}).listen(3000);

console.log('servidor iniciado...');

//Objeto pedidosEnProceso, con un metodo que filtra los que estan en proceso
const pedidosEnProceso = (res) =>{
    const arrayRes = pedidos.filter(item =>{
        return item.estado == 'proceso';
    });

    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(JSON.stringify(arrayRes));
}

//ya le mande el argumento sopa en nombre
const pedidosPorNombre = (nombre, res) =>{
    const arrayRes = pedidos.filter(item =>{
        return item.nombre == nombre;
    });

    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(JSON.stringify(arrayRes));
}
