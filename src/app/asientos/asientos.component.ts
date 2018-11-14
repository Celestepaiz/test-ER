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
  status31: boolean; status32: boolean; status33: boolean; status34: boolean; status35: boolean; status36: boolean;
  status37: boolean; status38: boolean; status39: boolean; status40: boolean; 

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
      if(this.status1 == false)
        this.status1 = true;
      else
        this.status1 = false;
    
    if(numeroAsiento == 2)
      if(this.status2 == false)
        this.status2 = true;
      else
        this.status2 = false;
    
    if(numeroAsiento == 3)
      if(this.status3 == false)
        this.status3 = true;
      else
        this.status3 = false;
    
    if(numeroAsiento == 4)
      if(this.status4 == false)
        this.status4 = true;
      else
        this.status4 = false;
    
    if(numeroAsiento == 5)
      if(this.status5 == false)
        this.status5 = true;
      else
        this.status5 = false;
    
    if(numeroAsiento == 6)
      if(this.status6 == false)
        this.status6 = true;
      else
        this.status6 = false;
    
    if(numeroAsiento == 7)
      if(this.status7 == false)
        this.status7 = true;
      else
        this.status7 = false;
    
    if(numeroAsiento == 8)
      if(this.status8 == false)
        this.status8 = true;
      else
        this.status8 = false;
    
    if(numeroAsiento == 9)
      if(this.status9 == false)
        this.status9 = true;
      else
        this.status9 = false;
    
    if(numeroAsiento == 10)
      if(this.status10 == false)
        this.status10 = true;
      else
        this.status10 = false;
    
    if(numeroAsiento == 11)
      if(this.status11 == false)
        this.status11 = true;
      else
        this.status11 = false;
    
    if(numeroAsiento == 12)
      if(this.status12 == false)
        this.status12 = true;
      else
        this.status12 = false;
    
    if(numeroAsiento == 13)
      if(this.status13 == false)
        this.status13 = true;
      else
        this.status13 = false;
    
    if(numeroAsiento == 14)
      if(this.status14 == false)
        this.status14 = true;
      else
        this.status14 = false;
    
    if(numeroAsiento == 15)
      if(this.status15 == false)
        this.status15 = true;
      else
        this.status15 = false;
    
    if(numeroAsiento == 16)
      if(this.status16 == false)
        this.status16 = true;
      else
        this.status16 = false;
    
    if(numeroAsiento == 17)
      if(this.status17 == false)
        this.status17 = true;
      else
        this.status17 = false;
    
    if(numeroAsiento == 18)
      if(this.status18 == false)
        this.status18 = true;
      else
        this.status18 = false;
    
    if(numeroAsiento == 19)
      if(this.status19 == false)
        this.status19 = true;
      else
        this.status19 = false;
    
    if(numeroAsiento == 20)
      if(this.status20 == false)
        this.status20 = true;
      else
        this.status20 = false;
    
    if(numeroAsiento == 21)
      if(this.status21 == false)
        this.status21 = true;
      else
        this.status21 = false;
    
    if(numeroAsiento == 22)
      if(this.status22 == false)
        this.status22 = true;
      else
        this.status22 = false;
    
    if(numeroAsiento == 23)
      if(this.status23 == false)
        this.status23 = true;
      else
        this.status23 = false;
    
    if(numeroAsiento == 24)
      if(this.status24 == false)
        this.status24 = true;
      else
        this.status24 = false;
    
    if(numeroAsiento == 25)
      if(this.status25 == false)
        this.status25 = true;
      else
        this.status25 = false;
    
    if(numeroAsiento == 26)
      if(this.status26 == false)
        this.status26 = true;
      else
        this.status26 = false;
    
    if(numeroAsiento == 27)
      if(this.status27 == false)
        this.status27 = true;
      else
        this.status27 = false;
    
    if(numeroAsiento == 28)
      if(this.status28 == false)
        this.status28 = true;
      else
        this.status28 = false;
    
    if(numeroAsiento == 29)
      if(this.status29 == false)
        this.status29 = true;
      else
        this.status29 = false;
    
    if(numeroAsiento == 30)
      if(this.status30 == false)
        this.status30 = true;
      else
        this.status30 = false;
    
    if(numeroAsiento == 31)
      if(this.status31 == false)
        this.status31 = true;
      else
        this.status31 = false;
    
    if(numeroAsiento == 32)
      if(this.status32 == false)
        this.status32 = true;
      else
        this.status32 = false;
    
    if(numeroAsiento == 33)
      if(this.status33 == false)
        this.status33 = true;
      else
        this.status33 = false;
    
    if(numeroAsiento == 34)
      if(this.status34 == false)
        this.status34 = true;
      else
        this.status34 = false;
    
    if(numeroAsiento == 35)
      if(this.status35 == false)
        this.status35 = true;
      else
        this.status35 = false;
    
    if(numeroAsiento == 36)
      if(this.status36 == false)
        this.status36 = true;
      else
        this.status36 = false;
    
    if(numeroAsiento == 37)
      if(this.status37 == false)
        this.status37 = true;
      else
        this.status37 = false;
    
    if(numeroAsiento == 38)
      if(this.status38 == false)
        this.status38 = true;
      else
        this.status38 = false;
    
    if(numeroAsiento == 39)
      if(this.status39 == false)
        this.status39 = true;
      else
        this.status39 = false;
    
    if(numeroAsiento == 40)
      if(this.status40 == false)
        this.status40 = true;
      else
        this.status40 = false;
  } 

}
