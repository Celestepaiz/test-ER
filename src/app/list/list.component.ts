import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {formatDate } from '@angular/common';
import { TotemApisService } from '../services/totem-apis.service';

import { Corridas } from '../models/corridas';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public identity;
  public errorMessage;
	public alertRegister;

  //Parametros en la rutsa
  public salida;
  public llegada;
  public fechaSalida;
  public fechaRegreso;
  public asientosAdulto;
  public asientosNinio;
  public asientosInapam;

  public loading: boolean;
  public noCorridas: boolean;

  public corridasIda: Corridas[] = [];

  constructor(
    private _route: ActivatedRoute,
		private _router: Router,
    private _totemService: TotemApisService
  ) { }

  ngOnInit() {
    this.loading = false;
    this.identity = this._totemService.getIdentity();
    this._route.queryParams.subscribe(params => {
        // Defaults to 0 if no query param provided.
        //this.page = +params['page'] || 0;
        this.salida = params['salida'] || null;
        this.llegada = params['llegada'] || null;
        this.fechaSalida = params['fech'] || null;
        this.fechaRegreso = params['fecReg'] || null;
        this.asientosAdulto = params['asientosAdulto'] || null;
        this.asientosNinio = params['asientosNinio'] || null;
        this.asientosInapam = params['asientosInapam'] || null;     
      });

      //Validaciones de que existan parametros
      if(this.salida == null || this.llegada == null){
        this._router.navigate(['donde-sales']);
      }else{
        if(this.fechaRegreso != null){ //Aqui hay fecha de Regreso          
          console.log('Todo esta bien en el viaje redondo');
          this.consultaCorridas(true);          
        }else{ //Aqui no lo hay
          if(this.fechaSalida != null){            
            console.log('Todo esta bien en el viaje sencillo');
            this.consultaCorridas(false);             
          }else{
            this._router.navigate(['donde-sales']);
          }
        }
      }
  }

  consultaCorridas(redondo: boolean){
    if(!redondo){
      //Fecha en este formato ---> 2018-09-05T00:00:00
      let myFecha = formatDate(this.fechaSalida, 'yyyy-MM-ddT00:00:00', 'en-US');
      let body = {
      	salida: this.salida,
        llegada: this.llegada,
      	id: this.identity.sesionID,
      	fecha: myFecha
      };
      //Peticion al Server en Node
      this._totemService.getCorridas(body).subscribe(
				response => {
            this.loading = true;

            for(var i in response.corridas){
              if(response.corridas[i].destinoCorrida._text == this.llegada){
                //console.log(response.corridas[i].claveCorrida._text);
                let aux = new Corridas(response.corridas[i].claveCorrida._text, response.corridas[i].descripcionDestinoSolicitado._text,
                  response.corridas[i].descripcionOrigeSolicitado._text, response.corridas[i].destinoSolicitado._text,
                  response.corridas[i].origenSolicitado._text, response.corridas[i].fechaCorrida._text,
                  response.corridas[i].fechaHoraSalida._text, response.corridas[i].pasajerosDisponibles._text,
                  response.corridas[i].servicioNombre._text);
                this.corridasIda.push(aux);
              }
            }

            if(this.corridasIda.length == 0){
              this.noCorridas = true;
            }
            //console.log(this.corridasIda);
				},
				error => {
          var errorMessage = <any>error;

	        if(errorMessage != null){
	          var body = JSON.parse(error._body);
            this.loading = true;
	          this.alertRegister = body.message;
	        }
				}
			);
    }else{
      /*Aqui haremos dos peticiones al Server la primera para obtener las corridas de ida
        y la segunda para obtener las corridas de vuelta*/

      //Fecha en este formato ---> 2018-09-05T00:00:00
      let myFechaSalida = formatDate(this.fechaSalida, 'yyyy-MM-ddT00:00:00', 'en-US');
      let bodySalida = {
      	salida: this.salida,
        llegada: this.llegada,
      	id: this.identity.sesionID,
      	fecha: myFechaSalida
      };

      let myFechaRegreso = formatDate(this.fechaRegreso, 'yyyy-MM-ddT00:00:00', 'en-US');
      let bodyVuelta = {
      	salida: this.salida,
        llegada: this.llegada,
      	id: this.identity.sesionID,
      	fecha: myFechaRegreso
      };
    }
  }

  sendCorrida(claveViaje: string){
    let myFecha = formatDate(this.fechaSalida, 'yyyy-MM-ddT00:00:00', 'en-US');    
    this._router.navigate(['asientos'], {
      queryParams: {
        salida: this.salida,
        llegada: this.llegada,
        fech: myFecha,
        clave: claveViaje,
        asientosAdulto: this.asientosAdulto,
        asientosNinio: this.asientosNinio,
        asientosInapam: this.asientosInapam
      }
    });
  }

}
