'use strict'
const soapRequest = require('easy-soap-request');
const fs = require('fs');
const convert = require('xml-js');
//var url = 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService?wsdl';
var url = 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService';
var loginStatus = false;

function pruebas(req, res){
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
  loginStatus = true;
   console.log(response.response.body);
   const xmlres = response.response.body
   const result = convert.xml2json(xmlres, {compact: false, alwaysArray: false});
	 res.status(200).send({
     response
	 });
 })
 .catch((err) => {
   console.log(err)
 });

 

}
function getAsientosDisp(req, res){
  var params = req.body;
  var claveCorrida = '4PTEP0610N838900';
  var origen = '4PTE';
  var sesionId = '3730';

  const headers = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService?wsdl#getAsientosDisp',
  };
  const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="http://control/">
   <soapenv:Header/>
   <soapenv:Body>
   <con:getAsientosDisp>
   <!--Optional:-->
   <request>
   <!--Optional:-->
   <claveCorrida>${claveCorrida}</claveCorrida>
   <!--Optional:-->
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
  pruebas,
  getAsientosDisp
};
