'use strict'

//const EasySoap = require('easysoap');
const soapRequest = require('easy-soap-request');
const fs = require('fs');
//var url = 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService?wsdl';
var url = 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService';

function pruebas(req, res){

	const headers = {
  'user-agent': 'sampleTest',
  'Content-Type': 'text/xml;charset=UTF-8',
  'soapAction': 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService?wsdl#getLogin',
};

const xml = fs.readFileSync('./login.txt', 'utf-8');

// usage of module
/*(async () => {
  const { response } = await soapRequest(url, headers, xml);
  const { body, statusCode } = response;
  console.log(body);
  console.log(statusCode);
})();*/

soapRequest(url, headers, xml)
 .then((response) => {
	 console.log(response);
	 res.status(200).send({
		 response
	 });
 })
 .catch((err) => {

 });

}

module.exports = {
	pruebas
};
