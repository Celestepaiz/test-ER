import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotemApisService {

  constructor(private _http: Http) { }  

  getLogin(){
    let headers = new Headers({
      'Content-Type':'application/xml',
      'Accept':  'application/xml',
      'Response-Type': 'text'
    });

    let options = new RequestOptions({ headers: headers });

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

    return this._http.get(encodeURIComponent(postedData), options).pipe(map(res => res.text()));
  }
}
