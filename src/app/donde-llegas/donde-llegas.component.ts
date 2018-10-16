import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { TotemApisService } from '../services/totem-apis.service';

declare let $:any;

@Component({
  selector: 'app-donde-llegas',
  templateUrl: './donde-llegas.component.html',
  styleUrls: ['./donde-llegas.component.css']
})
export class DondeLlegasComponent implements OnInit {

	//date = fecha;

	@ViewChild('muestraPuebla') puebla: ElementRef;
	@ViewChild('muestraMex') mexico: ElementRef;


	constructor(
    private _totemService: TotemApisService
  ) {
      
  }

  	ngOnInit() {
      //this.iniciarSesion();
  	}

    /*soapCall() {
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.open('POST', 'http://187.210.68.147:8082/ER_WS_CONTROL/ERWSINFRAService?wsdl', true);
      //const input_element = <HTMLInputElement> document.getElementById('choosenNumber');

      //console.log('chVal : ' + input_element.value);
      //const choosenNumberValue = input_element.value;

      // The following variable contains the xml SOAP request.
      const sr =
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

      xmlhttp.onreadystatechange =  () => {
          if (xmlhttp.readyState == 4) {
              if (xmlhttp.status == 200) {
                  const xml = xmlhttp.responseXML;
                  // Here I'm getting the value contained by the <return> node.
                  //const response_number = parseInt(xml.getElementsByTagName('return')[0].childNodes[0].nodeValue);
                  // Print result square number.
                  //console.log(response_number);
              }
          }
      }
      // Send the POST request.
      xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
      xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
      xmlhttp.responseType = 'document';
      xmlhttp.send(sr);
    }*/

    iniciarSesion(){
      this._totemService.getLoginPrueba().subscribe(
        (result: any) => {

        },
        error => {
          console.log("Ocurrio un erro")
        }
      );
    }

  	pueblaShow(){
  		$(this.puebla.nativeElement).modal('show');
  	}

  	mexicoShow(){
  		$(this.mexico.nativeElement).modal('show');
  	}

  	//var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  	//var f=new Date();
	//var fecha = (f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

}
