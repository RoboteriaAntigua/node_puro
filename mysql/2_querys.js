//Dicho script sirve de plantilla para futuros impactos en tablas

var mysql =  require('mysql');

var conexion = mysql.createConnection({
	host: "localhost",
	database: "introduccion", 
	user: "root",
	password: "123"
});

conexion.connect( function(error)
	{ 
		if (error) {throw error;}
		else{ 
			console.log('connected');
			//unas querys
			conexion.query("select * from paises;",	function (error, result, fields) {
					if(error){throw error;}
					else{console.log(result);};
					});
			}
	});
