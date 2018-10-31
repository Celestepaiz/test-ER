'use strict'
const soapRequest = require('easy-soap-request');
const convert = require('xml-js');
const fs = require('fs');
//var url = 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService?wsdl';
var url = 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService';
var loginStatus = false;

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

function getOrigenesDestinosEr(req, res){
  var params = req.body;
  var canal = 'TMS';
  var empresa = 'AMPERSA';
  var origen = 'AERO';
  var servicio = 'A';
  var sesionId = '3730';
  var unidadNegocio = '';


  const headers = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService?wsdl#getOrigenesDestinosEr',
  };
  const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:con="http://control/">
   <soapenv:Header/>
   <soapenv:Body>
   <con:getOrigenesDestinosEr>
   <!--Optional:-->
   <request>
   <!--Optional:-->
   <canal>${canal}</canal>
   <!--Optional:-->
   <empresa>${empresa}</empresa>
   <!--Optional:-->
   <origen>${origen}</origen>
   <!--Optional:-->
   <servicio>${servicio}</servicio> --Dependiendo el servicio
   <sesionId>${sesionId}</sesionId>
   <!--Optional:-->
   <unidadNegocio>${unidadNegocio}</unidadNegocio>
   </request>
   </con:getOrigenesDestinosEr>
   </soapenv:Body>
  </soapenv:Envelope>`;
  soapRequest(url, headers, xml)
  .then((response) => {
    console.log(response.response.body);
    /*
    const xmlres = response.response.body
    const result = convert.xml2json(xmlres, {compact: false, alwaysArray: true});
    console.log(response)*/
    res.status(200).send({response});
  })
  .catch((err) => {
    console.log(err)

  });
}

function getBloquearAsientos(req, res){
  var params = req.body;
  var claveCorrida = '4PTEP0610N838900';
  var modalidad = 'O';
  var noAsientos = ',13';
  var origen = '4PTE';
  var sesionId = '3730';
  var tipoPasajero = ',A';

  const headers = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService?wsdl#getBloquearAsientos',
  };
  const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" sexmlns:con="http://control/">
   <soapenv:Header/>
   <soapenv:Body>
   <con:getBloquearAsientos>
   <!--Optional:-->
   <request>
   <!--Optional:-->
   <claveCorrida>${claveCorrida}</claveCorrida>
   <!--Optional:-->
   <modalidad>${modalidad}</modalidad>
   <!--Optional:-->
   <noAsientos>${noAsientos}</noAsientos>
   <!--Optional:-->
   <origen>${origen}</origen>
   <sesionId>${sesionId}</sesionId>
   <!--Optional:-->
   <tipoPasajero>${tipoPasajero}</tipoPasajero>
   </request>
   </con:getBloquearAsientos>
   </soapenv:Body>
  </soapenv:Envelope>`;
  soapRequest(url, headers, xml)
  .then((response) => {
    console.log(response.response.body);
    /*
    const xmlres = response.response.body
    const result = convert.xml2json(xmlres, {compact: false, alwaysArray: true});
    console.log(response)*/
    res.status(200).send({response});
  })
  .catch((err) => {
    console.log(err)

  });
}



function getOrigenesDestinosEr(req, res){
  var params = req.body;
  var canal = 'TMS';
  var empresa = 'AMPERSA';
  var origen = 'AERO';
  var servicio = 'A';
  var sesionId = '3730';
  var unidadNegocio = '';


  const headers = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService?wsdl#getOrigenesDestinosEr',
  };
  const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:con="http://control/">
   <soapenv:Header/>
   <soapenv:Body>
   <con:getOrigenesDestinosEr>
   <!--Optional:-->
   <request>
   <!--Optional:-->
   <canal>${canal}</canal>
   <!--Optional:-->
   <empresa>${empresa}</empresa>
   <!--Optional:-->
   <origen>${origen}</origen>
   <!--Optional:-->
   <servicio>${servicio}</servicio> --Dependiendo el servicio
   <sesionId>${sesionId}</sesionId>
   <!--Optional:-->
   <unidadNegocio>${unidadNegocio}</unidadNegocio>
   </request>
   </con:getOrigenesDestinosEr>
   </soapenv:Body>
  </soapenv:Envelope>`;
  soapRequest(url, headers, xml)
  .then((response) => {
    console.log(response.response.body);
    /*
    const xmlres = response.response.body
    const result = convert.xml2json(xmlres, {compact: false, alwaysArray: true});
    console.log(response)*/
    res.status(200).send({response});
  })
  .catch((err) => {
    console.log(err)

  });
}

function getVenderBoletos(req, res){
  var params = req.body;
  var clientId = '';
  var sesionId = '3730';
  var autorizadoPor = '';
  var caja = '';
  var claveCorrida = '';
  var destino = '';
  var edad = '';
  var email = '';
  var empresa = '';
  var fechaHoraVenta = '';
  var generoPasajero = '';
  var importeBoleto = '';
  var noAsiento = '';
  var nombrePasajero = '';
  var origen = '';
  var origenCorrida = '';
  var referenciaAdicional10 = '';
  var sentidoViaje = '';
  var servicio = '';
  var sucursalClave = '';
  var tipoBoleto = '';
  var tipoPago = '';
  var tipoPasajero = '';
  var tipoVenta = '';
  var usuarioNumero = '';
  var fechaViaje = '';
  var importePago = '';
  var nombreBanco = '';
  var numAutorizacion = '';
  var numOperacion = '';
  var numReferencia = '';
  var numTarjeta = '';
  var tipoPago = '';

  const headers = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService?wsdl#getVenderBoletos',
  };
  const xml = `<soapenv:Envelope
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:con="http://control/">
   <soapenv:Header/>
   <soapenv:Body>
   <con:getVenderBoletos>
   <!--Optional:-->
   <request>
   <clienteId>${clientId}</clienteId>
   <sesionId>${sesionId}</sesionId>
   <!--Optional:-->
   <transaccion>
   <!--Zero or more repetitions:-->
   <asientos>
   <autorizadoPor>${autorizadoPor}</autorizadoPor>
   <!--Optional:-->
   <caja>${caja}</caja>
   <!--Optional:-->
   <claveCorrida>${claveCorrida}</claveCorrida>
   <clienteId>${clientId}</clienteId>
   <!--Optional:-->
   <destino>${destino}</destino>
   <!--Optional:-->
   <edad>${edad}</edad>
   <!--Optional:-->
   <email>${email}</email>
   <!--Optional:-->
   <empresa>${empresa}</empresa>
   <!--Optional:-->
   <fechaHoraVenta>${fechaHoraVenta}</fechaHoraVenta>
   <!--Optional:-->
   <generoPasajero>${generoPasajero}</generoPasajero>
   <importeBoleto>${importeBoleto}</importeBoleto>
   <noAsiento>${noAsiento}</noAsiento>
   <!--Optional:-->
   <nombrePasajero>${nombrePasajero}</nombrePasajero>
   <!--Optional:-->
   <origen>${origen}</origen>
   <!--Optional:-->
   <origenCorrida>${origenCorrida}</origenCorrida>
   <!--Optional:-->
   <referenciaAdicional10>${referenciaAdicional10}</referenciaAdicional10>
   <!--Optional:-->
   <sentidoViaje>${sentidoViaje}</sentidoViaje>
   <!--Optional:-->
   <servicio>${servicio}</servicio>
   <!--Optional:-->
   <sucursalClave>${sucursalClave}</sucursalClave>
   <!--Optional:-->
   <tipoBoleto>${tipoBoleto}</tipoBoleto>
   <!--Optional:-->
   <tipoPago>${tipoPago}</tipoPago>
   <!--Optional:-->
   <tipoPasajero>${tipoPasajero}</tipoPasajero>
   <!--Optional:-->
   <tipoVenta>${tipoVenta}</tipoVenta>
   <!--Optional:-->
   <usuarioNumero>${usuarioNumero}</usuarioNumero>
   </asientos>
   <!--Optional:-->
   <fechaViaje>${fechaViaje}</fechaViaje>
   <pagos>
   <importePago>${importePago}</importePago>
   <!--Optional:-->
   <nombreBanco>${nombreBanco}</nombreBanco>
   <!--Optional:-->
   <numAutorizacion>${numAutorizacion}</numAutorizacion>
   <!--Optional:-->
   <numOperacion>${numOperacion}</numOperacion>
   <!--Optional:-->
   <numReferencia>${numReferencia}</numReferencia>
   <!--Optional:-->
   <numTarjeta>${numTarjeta}</numTarjeta>
   <!--Optional:-->
   <tipoPago>${tipoPago}</tipoPago>
   </pagos>
   </transaccion>
   </request>
   </con:getVenderBoletos>
   </soapenv:Body>
  </soapenv:Envelope>
  `;
  soapRequest(url, headers, xml)
  .then((response) => {
    console.log(response.response.body);
    /*
    const xmlres = response.response.body
    const result = convert.xml2json(xmlres, {compact: false, alwaysArray: true});
    console.log(response)*/
    res.status(200).send({response});
  })
  .catch((err) => {
    console.log(err)

  });
}

 function getAsientosDisp(req, res){
  var claveCorrida = req.params.claveCorrida;
  var origen = req.params.origen;
  var sesionId = req.params.id;

  const headers = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService?wsdl#getAsientosDisp',
  };
  const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="http://control/">
   <soapenv:Header/>
   <soapenv:Body>
   		<con:getAsientosDisp>
   			<request>
   				<claveCorrida>${claveCorrida}</claveCorrida>
   				<origen>${origen}</origen>
   				<sesionId>${sesionId}</sesionId>
   			</request>
   		</con:getAsientosDisp>
   </soapenv:Body>
  </soapenv:Envelope>`;

  soapRequest(url, headers, xml)
  .then((response) => {
    console.log(response.response.body);
    /*
    const xmlres = response.response.body
    const result = convert.xml2json(xmlres, {compact: false, alwaysArray: true});
    console.log(response)*/
    res.status(200).send({response});
  })
  .catch((err) => {
    console.log(err)

  });
}


module.exports = {
	getLogin,
	getCorridas,
  getAsientosDisp,
  getOrigenesDestinosEr,
  getBloquearAsientos,
  getVenderBoletos
};
