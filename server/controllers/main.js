'use strict'

const EasySoap = require('easysoap');
var url = 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService?wsdl';

function pruebas(req, res){

	var requestArgs = {
		canalVenta: 'TMS',
		direccionIP: '189.203.101.114',
		direccionMAC: 'A0:21:B7:A9:05:C0',
		nombreCaja: 'CAJAWEB-ER',
		nombreEquipo: 'CAJAWEB-ER',
		sucursalClave: 'WEB',
		usuarioContrasena: '123456',
		usuarioNumero: '1010'
	};

	const params = {
	   host: 'http://187.210.68.147:8082',
	   path: '/ER_WS_CONTROL/ERWSINFRAService',
	   wsdl: '/ER_WS_CONTROL/ERWSINFRAService?wsdl'
  }

	var soapClient = EasySoap(params);

	soapClient.call({
	   method    : 'getLogin',
	   attributes: {
	      xmlns: 'http://schemas.xmlsoap.org/soap/envelope/'
	   },
	   params: {
			 parameters: {
				 canalVenta: 'TMS',
				 direccionIP: '189.203.101.114',
				 direccionMAC: 'A0:21:B7:A9:05:C0',
				 nombreCaja: 'CAJAWEB-ER',
				 nombreEquipo: 'CAJAWEB-ER',
				 sucursalClave: 'WEB',
				 usuarioContrasena: '123456',
				 usuarioNumero: '1010'
			 } 
	   }
	})
	.then((callResponse) => {
	    console.log(callResponse.data);	// response data as json
	    console.log(callResponse.body);	// response body
	    console.log(callResponse.header);  //response header
			res.status(200).send({
	 			 message: 'Probando una acción del controlador de usuarios del api rest con Node y Mongo'
	 		 });
	})
	.catch((err) => {

	});

	/*soapClient.getMethodParamsByName('getLogin')
   .then((methodParams) => {
      console.log(methodParams.request);
      console.log(methodParams.response);
			res.status(200).send({
	 			 message: 'Probando una acción del controlador de usuarios del api rest con Node y Mongo'
	 		 });
    })
    .catch((err) => {

		});*/

	/*soapClient.getAllFunctions()
   .then((functionArray) => {
		 console.log(functionArray);
		 res.status(200).send({
			 message: 'Probando una acción del controlador de usuarios del api rest con Node y Mongo'
		 });
	 })
   .catch((err) => {

	 });*/
}

module.exports = {
	pruebas
};
