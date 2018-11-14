import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { TotemApisService } from '../services/totem-apis.service';

declare let $:any;
declare let jQuery:any;

@Component({
  selector: 'app-donde-llegas',
  templateUrl: './donde-llegas.component.html',
  styleUrls: ['./donde-llegas.component.css']
})
export class DondeLlegasComponent implements OnInit {

  public identity;
  public errorMessage;
	public alertRegister;
  public selectedValuePueblaDondeSales;
  public selectedValuePueblaDondeLlegas;
  public selectedValueMexicoDondeSales;
  public selectedValueMexicoDondeLlegas;

  public selectedAsientosNumberPuebla;
  public selectedAsientosNumberMexico;

  public valueRedondo: boolean;
  public valueIda: boolean = true;
  public serverLives: boolean;
  public lockButtons: boolean;

  public todayDatePuebla = new Date();
  public todayDateMexico = new Date();

  public contadorGeneral: number;
  public contadorAdultos: number;
  public contadorNinios: number;
  public contadorInapam: number;

  public contadorGeneralMexico: number;
  public contadorAdultosMexico: number;
  public contadorNiniosMexico: number;
  public contadorInapamMexico: number;

  public todayDatePueblaRegreso = new Date();
  public todayDateMexicoRegreso = new Date();

  bsRangeValue: Date[];


  optionsPueblaDondeLlegas = [
    {
      value: '4PTE',
      name : "Terminal 4 Poniente PUE"
    },
    {
      value: 'CAPU',
      name : "Central CAPU PUE"
    },
    {
      value: 'PSNDIEGO',
      name : "Plaza San Diego Cholula PUE"
    }
  ];

  optionsPueblaDondeSales = [
    {
      value: 'AERO',
      name : "Aeropuerto T1 CDMX"
    },
    {
      value: 'AEROT2',
      name : "Aeropuerto T2 CDMX"
    }
  ];

  optionsMexicoDondeLlegas = [
    {
      value: 'AERO',
      name : "Aeropuerto T1 CDMX"
    },
    {
      value: 'AEROT2',
      name : "Aeropuerto T2 CDMX"
    }
  ];

  optionsMexicoDondeSales = [
    {
      value: '4PTE',
      name : "Terminal 4 Poniente PUE"
    },
    {
      value: 'CAPU',
      name : "Central CAPU PUE"
    },
    {
      value: 'PSNDIEGO',
      name : "Plaza San Diego Cholula PUE"
    }
  ];

	@ViewChild('muestraPuebla') puebla: ElementRef;
	@ViewChild('muestraMex') mexico: ElementRef;


	constructor(
    private _route: ActivatedRoute,
		private _router: Router,
    private _totemService: TotemApisService
  ) {
    this.todayDatePueblaRegreso.setDate(this.todayDatePueblaRegreso.getDate() + 7);
    this.bsRangeValue = [this.todayDatePuebla, this.todayDatePueblaRegreso];
  }

  	ngOnInit() {
      this.getServerStatus();
      this.lockButtons = true;
      this.contadorGeneral = 0;
      this.contadorAdultos = 0;
      this.contadorNinios = 0;
      this.contadorInapam = 0;

      this.contadorGeneralMexico = 0;
      this.contadorAdultosMexico = 0;
      this.contadorNiniosMexico = 0;
      this.contadorInapamMexico = 0;
    }

    getServerStatus(){
      this._totemService.getServerStatus().subscribe(
				response => {
          this.serverLives = true;
					this.iniciarSesion();
				},
				error => {
          this.serverLives = false;
          this.alertRegister = '¡Oops! Ocurrió un error en el servidor';
				}
			);
    }

    iniciarSesion(){
      this.lockButtons = true;
      this.alertRegister = null;
      this._totemService.getIDFromLogin().subscribe(
				response => {
            //console.log(response.sesionID);
            if(response.sesionID == 0){              
              this.lockButtons = false;
              this.serverLives = false;
              this.alertRegister = '¡Oops! Server no disponible';
            }else{
              this.lockButtons = false;
              this.serverLives = true;
              let identity = response;
              this.identity = identity;
              this.alertRegister = null;
              localStorage.setItem('myID', JSON.stringify(identity));
            }            
				},
				error => {
          this.serverLives = false;
          this.alertRegister = '¡Oops! Ocurrió un error en el servidor';
				}
			);
    }

    aumentaAdulto(status: string){
      if(status == 'menos'){
        if(this.contadorGeneral > 0 && this.contadorGeneral <= 10 && this.contadorAdultos > 0){
          this.contadorAdultos--;
          this.contadorGeneral--;
        }
      }

      if(status == 'mas'){
        if(this.contadorGeneral < 10){
          this.contadorAdultos++;
          this.contadorGeneral++;
        }
      }      
    }

    aumentaAdultoMexico(status: string){
      if(status == 'menos'){
        if(this.contadorGeneralMexico > 0 && this.contadorGeneralMexico <= 10 && this.contadorAdultosMexico > 0){
          this.contadorAdultosMexico--;
          this.contadorGeneralMexico--;
        }
      }

      if(status == 'mas'){
        if(this.contadorGeneralMexico < 10){
          this.contadorAdultosMexico++;
          this.contadorGeneralMexico++;
        }
      }      
    }

    aumentaNinio(status: string){
      if(status == 'menos'){
        if(this.contadorGeneral > 0 && this.contadorGeneral <= 10 && this.contadorNinios > 0){
          this.contadorNinios--;
          this.contadorGeneral--;
        }
      }

      if(status == 'mas'){
        if(this.contadorGeneral < 10){
          this.contadorNinios++;
          this.contadorGeneral++;
        }
      } 
    }

    aumentaNinioMexico(status: string){
      if(status == 'menos'){
        if(this.contadorGeneralMexico > 0 && this.contadorGeneralMexico <= 10 && this.contadorNiniosMexico > 0){
          this.contadorNiniosMexico--;
          this.contadorGeneralMexico--;
        }
      }

      if(status == 'mas'){
        if(this.contadorGeneralMexico < 10){
          this.contadorNiniosMexico++;
          this.contadorGeneralMexico++;
        }
      }      
    }

    aumentaInapam(status: string){
      if(status == 'menos'){
        if(this.contadorGeneral > 0 && this.contadorGeneral <= 10 && this.contadorInapam > 0){
          this.contadorInapam--;
          this.contadorGeneral--;
        }
      }

      if(status == 'mas'){
        if(this.contadorGeneral < 10){
          this.contadorInapam++;
          this.contadorGeneral++;
        }
      }      
    }

    aumentaInapamMexico(status: string){
      if(status == 'menos'){
        if(this.contadorGeneralMexico > 0 && this.contadorGeneralMexico <= 10 && this.contadorInapamMexico > 0){
          this.contadorInapamMexico--;
          this.contadorGeneralMexico--;
        }
      }

      if(status == 'mas'){
        if(this.contadorGeneralMexico < 10){
          this.contadorInapamMexico++;
          this.contadorGeneralMexico++;
        }
      }      
    }

    checkValuesPuebla(){
      

      if(this.serverLives == true){
        if(this.selectedValuePueblaDondeSales == null || this.selectedValuePueblaDondeLlegas == null){
          this.alertRegister = 'Selecciona lugar de Salida y Llegada';
        }else{
          this.alertRegister = null;
          if(this.valueRedondo){
            if(this.todayDatePueblaRegreso == null){
              this.alertRegister = 'Selecciona una fecha para tu viaje de regreso';
            }else{
              if(this.selectedAsientosNumberPuebla == null){
                this.alertRegister = 'Selecciona el número de asientos';
              }else{
                this.alertRegister = null;  // Aqui todo esta bien en el viaje redondo
                this._router.navigate(['list'], {
                  queryParams: {
                    salida: this.selectedValuePueblaDondeSales,
                    llegada: this.selectedValuePueblaDondeLlegas,
                    fech: this.todayDatePuebla,
                    fecReg: this.todayDatePueblaRegreso,
                    asientos: this.selectedAsientosNumberPuebla
                  }
                });
              }              
            }
          }else{
            if(this.todayDatePuebla == null){
              this.alertRegister = 'Selecciona una fecha para tu viaje de ida';
            }else{
              if(this.selectedAsientosNumberPuebla == null){
                this.alertRegister = 'Selecciona el número de asientos';
              }else{
                this.alertRegister = null;  // Aqui todo esta bien en el viaje no redondo
                this._router.navigate(['list'], {
                  queryParams: {
                    salida: this.selectedValuePueblaDondeSales,
                    llegada: this.selectedValuePueblaDondeLlegas,
                    fech: this.todayDatePuebla,
                    asientos: this.selectedAsientosNumberPuebla
                  }
                });
              }
            }
          }
        }
      }else{
        this.alertRegister = 'No podemos consultar corridas, servidor no está disponible';
      }
    }

    checkValuesMexico(){
      if(this.serverLives == true){
        if(this.selectedValueMexicoDondeSales == null || this.selectedValueMexicoDondeLlegas == null){
          this.alertRegister = 'Selecciona lugar de Salida y Llegada';
        }else{
          this.alertRegister = null;
          if(this.valueRedondo){
            if(this.todayDateMexicoRegreso == null){
              this.alertRegister = 'Selecciona una fecha para tu viaje de regreso';
            }else{
              if(this.selectedAsientosNumberMexico == null){
                this.alertRegister = 'Selecciona el número de asientos';
              }else{
                this.alertRegister = null; // Aqui todo esta bien en el viaje redondo
                this._router.navigate(['list'], {
                  queryParams: {
                    salida: this.selectedValueMexicoDondeSales,
                    llegada: this.selectedValueMexicoDondeLlegas,
                    fech: this.todayDateMexico,
                    fecReg: this.todayDateMexicoRegreso,
                    asientos: this.selectedAsientosNumberMexico
                  }
                });
              }
            }
          }else{
            if(this.todayDateMexico == null){
              this.alertRegister = 'Selecciona una fecha para tu viaje de ida';
            }else{
              if(this.selectedAsientosNumberMexico == null){
                this.alertRegister = 'Selecciona el número de asientos';
              }else{
                this.alertRegister = null;  // Aqui todo esta bien en el viaje no redondo
                this._router.navigate(['list'], {
                  queryParams: {
                    salida: this.selectedValueMexicoDondeSales,
                    llegada: this.selectedValueMexicoDondeLlegas,
                    fech: this.todayDateMexico,
                    asientos: this.selectedAsientosNumberMexico
                  }
                });
              }
            }
          }
        }
      }else{
        this.alertRegister = 'No podemos consultar corridas, servidor no está disponible';
      }
    }

    setTipoViajeIda(value: boolean){
      this.valueIda = value;
    }

    setTipoViajeRedondo(value: boolean){
      this.valueRedondo = value;
    }


    logout(){
	  	localStorage.removeItem('myID');
	  	localStorage.clear();
	  	this.identity = null;
	    //this._router.navigate(['/login']);
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
