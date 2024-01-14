//subiremos unos datos a la tabla paises

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
			var pais='francia_2do';
			conexion.query(
				`insert into paises (pais, poblacion, promedio_edad) 
				values ("${pais}", 11,44);  ;`,	function (error, result, fields) {
					if(error){throw error;}
					else{console.log(result);};
					});
			}
		conexion.end();
	});

