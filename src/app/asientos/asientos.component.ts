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
  public asientos;

  public contador;

  public loading: boolean;
  public banderaAsiento: boolean;

  status1: boolean; status2: boolean; status3: boolean; status4: boolean; status5: boolean; status6: boolean;   
  status7: boolean; status8: boolean; status9: boolean; status10: boolean; status11: boolean; status12: boolean;
  status13: boolean; status14: boolean; status15: boolean; status16: boolean; status17: boolean; status18: boolean;
  status19: boolean; status20: boolean; status21: boolean; status22: boolean; status23: boolean; status24: boolean;
  status25: boolean; status26: boolean; status27: boolean; status28: boolean; status29: boolean; status30: boolean;

  constructor(
    private _route: ActivatedRoute,
		private _router: Router,
    private _totemService: TotemApisService
  ) { }

  ngOnInit() {
    this.loading = false;
    this.contador = 0;
    this.banderaAsiento = false;
    this.identity = this._totemService.getIdentity();
    this._route.queryParams.subscribe(params => {      
      this.salida = params['salida'] || null;
      this.llegada = params['llegada'] || null;
      this.fechaSalida = params['fech'] || null;
      this.claveViaje = params['clave'] || null;
      this.asientos = params['asientos'] || null;
    });    
  }

  vuelveConParametros(){
    this._router.navigate(['list'], {
      queryParams: {
        salida: this.salida,
        llegada: this.llegada,
        fech: this.fechaSalida,
        asientos: this.asientos     
      }
    });
  }

  bloqueaAsiento(numeroAsiento: any){
    if(numeroAsiento == 1)
      this.status1 = true;
    
    console.log(this.banderaAsiento);
  } 

}
