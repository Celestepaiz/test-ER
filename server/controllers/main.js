'use strict'

//const EasySoap = require('easysoap');
const soapRequest = require('easy-soap-request');
const convert = require('xml-js');
const fs = require('fs');
var url = 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService';

function getLogin(req, res){

	const headers = {
	  'user-agent': 'sampleTest',
	  'Content-Type': 'text/xml;charset=UTF-8',
	  'soapAction': 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService?wsdl#getLogin',
	};

	const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="http://control/">
	   <soapenv:Header/>
	   <soapenv:Body>
	      <con:getLogin>
	         <parameter>
	            <canalVenta>TMS</canalVenta>
	            <direccionIP>189.203.101.114</direccionIP>
	            <direccionMAC>A0:21:B7:A9:05:C0</direccionMAC>
	            <nombreCaja>CAJAWEB-ER</nombreCaja>
	            <nombreEquipo>CAJAWEB-ER</nombreEquipo>
	            <sucursalClave>WEB</sucursalClave>
	            <usuarioContrasena>123456</usuarioContrasena>
	            <usuarioNumero>1010</usuarioNumero>
	         </parameter>
	      </con:getLogin>
	   </soapenv:Body>`;


	soapRequest(url, headers, xml)
	 .then((response) => {
		 console.log('Success');
		 const jsonResult = convert.xml2json(response.response.body, {compact: true, spaces: 0});
		 //console.log(jsonResult._declaration);
		 //console.log(response.response.body);
		 const json = JSON.parse(jsonResult);
		 const sesionID = (json['S:Envelope']['S:Body']['ns2:getLoginResponse']['return']['sesionId']['_text']);
		 res.status(200).send({sesionID});
	 })
	 .catch((err) => {
		 console.log('Error');
		 res.status(404).send({message: 'Ocurrio un error'});
	 });

}

function getCorridas(req, res){
	var dest = req.params.llegada;
	var origen = req.params.salida;
	var id = req.params.id;
	var fecha = req.params.fecha;

	const headers = {
	  'user-agent': 'sampleTest',
	  'Content-Type': 'text/xml;charset=UTF-8',
	  'soapAction': 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService?wsdl#getCorridas',
	};

	const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="http://control/">
	   <soapenv:Header/>
	   <soapenv:Body>
	      <con:getCorridas>
	         <request>
	            <destino>${ dest }</destino>
	            <empresa>AMPERSA</empresa>
	            <fechaHoraSalida>${ fecha }</fechaHoraSalida>
	            <origen>${ origen }</origen>
	            <servicio>a</servicio>
	            <sesionId>${ id }</sesionId>
	         </request>
	      </con:getCorridas>
	   </soapenv:Body>`;

		 /*console.log('Success');
		 const jsonResult = convert.xml2json(response.response.body, {compact: true, spaces: 0});
		 //console.log(jsonResult._declaration);
		 //console.log(response.response.body);
		 const json = JSON.parse(jsonResult);
		 const sesionID = (json['S:Envelope']['S:Body']['ns2:getLoginResponse']['return']['sesionId']['_text']);
		 res.status(200).send({sesionID});*/

	soapRequest(url, headers, xml)
	 .then((response) => {
		 console.log(xml);
		 const jsonResult = convert.xml2json(response.response.body, {compact: true, spaces: 0});
		 const json = JSON.parse(jsonResult);
		 const corridas = (json['S:Envelope']['S:Body']['ns2:getCorridasResponse']['return']['corridas']);
		 res.status(200).send({corridas});
	 })
	 .catch((err) => {
		 console.log('Error');
		 res.status(404).send({message: 'Ocurrio un error'});
	 });

}

module.exports = {
	getLogin,
	getCorridas
};
