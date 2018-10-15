import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotemApisService {

  constructor(private _http: Http) { }

  getLoginPrueba(){
    /*let headers = new Headers({
      'Content-Type':'application/xml'
    });*/

    let url = 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService?wsdl';

    //let options = new RequestOptions({ headers: headers });
    let headers = new Headers({
				'Content-Type':'application/xml'
			});

    const postedData =
    `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="http://control/">
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

    return this._http.post(url, postedData, {headers: headers}).pipe(map(res => res.text()));
  }

  getLogin(){
    return new Promise(function(resolve, reject){
			var xhr = new XMLHttpRequest();

      //let url = 'http://187.210.68.147:8082/ERWSINFRAService?wsdl';
      let url = 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService?wsdl'

      const postedData =
      `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="http://control/">
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

      xhr.onreadystatechange =  () => {
          if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                  const xml = xhr.responseXML;
                  // Here I'm getting the value contained by the <return> node.
                  //const response_number = parseInt(xml.getElementsByTagName('return')[0].childNodes[0].nodeValue);
                  // Print result square number.
                  //console.log(response_number);
              }
          }
      }
      xhr.open('POST', url, true);

			//xhr.open('POST', url, true);
			//xhr.setRequestHeader('Authorization', token);
			xhr.send(postedData);
		});
  }
}
