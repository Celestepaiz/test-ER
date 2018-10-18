import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { TotemApisService } from '../services/totem-apis.service';

@Component({
  selector: 'app-asientos',
  templateUrl: './asientos.component.html',
  styleUrls: ['./asientos.component.css']
})
export class AsientosComponent implements OnInit {

  public identity;
  public errorMessage;
  public alertRegister;
  
  public salida;
  public llegada;
  public fechaSalida;
  public fechaRegreso;
  public claveViaje;

  public loading: boolean;

  constructor(
    private _route: ActivatedRoute,
		private _router: Router,
    private _totemService: TotemApisService
  ) { }

  ngOnInit() {
    this.loading = false;
    this.identity = this._totemService.getIdentity();
    this._route.queryParams.subscribe(params => {      
      this.salida = params['salida'] || null;
      this.llegada = params['llegada'] || null;
      this.fechaSalida = params['fech'] || null;
      this.claveViaje = params['clave'] || null;
    });
  }

  vuelveConParametros(){
    this._router.navigate(['list'], {
      queryParams: {
        salida: this.salida,
        llegada: this.llegada,
        fech: this.fechaSalida        
      }
    });
  }

}
