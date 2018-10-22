'use strict'

var app = require('./app');
var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("Servidor del api rest para consumir el WebService del TOTEM http://localhost:"+port);
});
