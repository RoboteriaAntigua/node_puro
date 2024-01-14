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
		else{ console.log('connected');}
	});
conexion.end();
