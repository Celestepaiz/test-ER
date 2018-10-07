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


	constructor(private _totemService: TotemApisService) { }

  	ngOnInit() {
      this.iniciarSesion();
  	}

    iniciarSesion(){
      this._totemService.getLogin().subscribe(
        response => {
            console.log(response);
        },
        error => {
          /*var errorMessage = <any>error;

              if(errorMessage != null){
                var body = JSON.parse(error._body);
                this.alertMessage = body.message;
                this.toastr.error(this.alertMessage, 'Error!');
              }*/
              console.log('Ocurrio un error');
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
