import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var M:any;

@Component({
  selector: 'app-navbar',
  templateUrl: '../views/navbar.html',
  providers: []
})

export class NavbarComponent implements OnInit{
	public titulo: string;
	public identity;
	public errorMessage;
	public alertRegister;



	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.titulo = 'Nav Bar';
	}


	ngOnInit(){

	}
  
  logout(){
  }
}
