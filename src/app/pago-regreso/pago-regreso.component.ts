import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ActionSequence } from 'protractor';

import {formatDate } from '@angular/common';
import { TotemApisService } from '../services/totem-apis.service';


declare let paypal: any;


@Component({
  selector: 'app-pago-regreso',
  templateUrl: './pago-regreso.component.html',
  styleUrls: ['./pago-regreso.component.css']
})
export class PagoRegresoComponent implements OnInit {

  public identity;
  public errorMessage;
  public alertRegister;

  public salida;
  public llegada;
  public fechaSalida;
  public fechaRegreso;
  public claveViaje;
  public tarifa;
  public asientosAdulto;
  public asientosNinio;
  public asientosInapam;

  name = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');

  today: number = Date.now();

  addScript: boolean = false;
  paypalLoad: boolean = false;

  finalAmount: number = 1;

  paypalconfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AWXKT42pvW0yB-LHRMphM2t-rn4FS9pIldA7DYZdCaziB_bMeGXNsDeQYtXjleYxtM0K38aCTWwEwLGs' 
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD'}}
          ]
        }
      })
    },

    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //do somenthing when payment is successful
      })
    }
  };

  ngAfterViewChecked(): void{
    if(!this.addScript){
      this.addPaypalScript().then(() => {
          paypal.Button.render(this.paypalconfig, '#paypal-button-container');
          this.paypalLoad = false;
      })
    }
  }

  addPaypalScript(){
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

  constructor(
    private _route: ActivatedRoute,
		private _router: Router,
    private _totemService: TotemApisService
  ) { }

  ngOnInit() {
    this.identity = this._totemService.getIdentity();
    this._route.queryParams.subscribe(params => {      
      this.salida = params['salida'] || null;
      this.llegada = params['llegada'] || null;
      this.fechaSalida = params['fech'] || null;
      this.claveViaje = params['clave'] || null;
      this.tarifa = params['tarifa'] || null;
      this.asientosAdulto = params['asientosAdulto'] || null;
      this.asientosNinio = params['asientosNinio'] || null;
      this.asientosInapam = params['asientosInapam'] || null;     
    });    
  }

  vuelveConParametros(){
    this._router.navigate(['asientos'], {
      queryParams: {
        salida: this.salida,
        llegada: this.llegada,
        fech: this.fechaSalida,
        clave: this.claveViaje,
        tarifa: this.tarifa,
        asientosAdulto: this.asientosAdulto,
        asientosNinio: this.asientosNinio,
        asientosInapam: this.asientosInapam    
      }
    });
  }
}
