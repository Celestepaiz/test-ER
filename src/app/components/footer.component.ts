import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var M:any;

@Component({
  selector: 'app-footer',
  templateUrl: '../views/footer.html',
  providers: []
})

export class FooterComponent implements OnInit{
	public titulo: string;
	public identity;
	public errorMessage;
	public alertRegister;

  anio: number;



	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.titulo = 'Footer';
    this.anio = new Date().getFullYear();
	}


	ngOnInit(){

	}

  logout(){
  }
}
