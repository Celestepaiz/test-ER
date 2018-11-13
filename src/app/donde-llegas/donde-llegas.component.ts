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

  optionsPueblaQty = [
    {
      value: 'Adulto',
      name : "Adulto (13-59 años)"
    },
    {
      value: 'AEROT2',
      name : "Menor (4-12 años)"
    },
    {
      value: 'AA',
      name: 'INAPAM (60-más)'
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
      this.setUPER();
      this.setUPER2();
      this.lockButtons = true;
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

    setUPER(){
      var adult    = $("#adult2");
      var children = $("#children2");
      var inapam   = $("#inapam2");
      var showPassengers = $( "div#show-passengers2" );
      var listPassengers = $( "#list-passengers2" );
      var rotate = $('#rotx2');
      $(".button2").on("click", function() {
          var xx = parseInt(adult.val()) + parseInt(children.val()) + parseInt(inapam.val());
          var $button = $(this);
          if ( xx < 10 || $button.text() == "-") {
              var oldValue = $button.parent().find("input").val();
              var newVal = 0;
              if ($button.text() == "+") {
                  newVal = parseFloat(oldValue) + 1;
              } else {
                  // Don't allow decrementing below zero
                  if (oldValue > 0) {
                      newVal = parseFloat(oldValue) - 1;
                  } else {
                      newVal = 0;
                  }
              }
              $button.parent().find("input").val(newVal);
          }
          xx = parseInt(adult.val()) + parseInt(children.val()) + parseInt(inapam.val());
          if(xx >= 10){
              $button.prop('disabled',true);
          }
      });
      var ticketFor = $("#ticketfor2");
      showPassengers.click(function(){
          showPassengers.toggleClass('gradient-show-passengers');
          listPassengers.slideToggle( "slow", function() {});
          rotate.toggleClass('rotated');
          adult.text(adult.val());
          ticketFor.empty();
          var $adult,$children,$inapam;

          if(adult.val() > 0){
              if(adult.val() == 1){
                  $adult = adult.val() +' Adulto';
              } else {
                  $adult = adult.val() +' Adultos';
              }
          } else {
              $adult = '';
          }
          if(children.val() > 0){
              var nTxt = 'Menor';
              var nBeTxt = ' ';
              if(children.val() == 1){
                  nTxt = 'Menor';
              } else {
                  nTxt = 'Menores';
              }
              if(adult.val() > 0){
                  nBeTxt = ' / ';
              }
              $children = nBeTxt + children.val() + ' ' + nTxt;
          } else {
              $children = '';
          }
          if(inapam.val() > 0){
              var iBeTxt = ' ';
              if(adult.val() > 0 || children.val() > 0 ){
                  iBeTxt = ' / ';
              }
              $inapam = iBeTxt + inapam.val() + ' INAPAM';
          } else {
              $inapam = '';
          }

          ticketFor.text($adult+' '+$children+' '+$inapam);
      });
    }

    setUPER2(){
      var adult    = $("#adult3");
      var children = $("#children3");
      var inapam   = $("#inapam3");
      var showPassengers = $( "div#show-passengers3" );
      var listPassengers = $( "#list-passengers3" );
      var rotate = $('#rotx3');
      $(".button2").on("click", function() {
          var xx = parseInt(adult.val()) + parseInt(children.val()) + parseInt(inapam.val());
          var $button = $(this);
          if ( xx < 10 || $button.text() == "-") {
              var oldValue = $button.parent().find("input").val();
              var newVal = 0;
              if ($button.text() == "+") {
                  newVal = parseFloat(oldValue) + 1;
              } else {
                  // Don't allow decrementing below zero
                  if (oldValue > 0) {
                      newVal = parseFloat(oldValue) - 1;
                  } else {
                      newVal = 0;
                  }
              }
              $button.parent().find("input").val(newVal);
          }
          xx = parseInt(adult.val()) + parseInt(children.val()) + parseInt(inapam.val());
          if(xx >= 10){
              $button.prop('disabled',true);
          }
      });
      var ticketFor = $("#ticketfor3");
      showPassengers.click(function(){
          showPassengers.toggleClass('gradient-show-passengers');
          listPassengers.slideToggle( "slow", function() {});
          rotate.toggleClass('rotated');
          adult.text(adult.val());
          ticketFor.empty();
          var $adult,$children,$inapam;

          if(adult.val() > 0){
              if(adult.val() == 1){
                  $adult = adult.val() +' Adulto';
              } else {
                  $adult = adult.val() +' Adultos';
              }
          } else {
              $adult = '';
          }
          if(children.val() > 0){
              var nTxt = 'Menor';
              var nBeTxt = ' ';
              if(children.val() == 1){
                  nTxt = 'Menor';
              } else {
                  nTxt = 'Menores';
              }
              if(adult.val() > 0){
                  nBeTxt = ' / ';
              }
              $children = nBeTxt + children.val() + ' ' + nTxt;
          } else {
              $children = '';
          }
          if(inapam.val() > 0){
              var iBeTxt = ' ';
              if(adult.val() > 0 || children.val() > 0 ){
                  iBeTxt = ' / ';
              }
              $inapam = iBeTxt + inapam.val() + ' INAPAM';
          } else {
              $inapam = '';
          }

          ticketFor.text($adult+' '+$children+' '+$inapam);
      });
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
                    asientos: this.ticketfor2
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
                    asientos: this.ticketfor2
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
                    asientos: this.ticketfor3
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
                    asientos: this.ticketfor3
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
