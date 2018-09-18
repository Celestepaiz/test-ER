import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: '../views/home.html',
  providers: []
})

export class HomeComponent implements OnInit{
	public titulo: string;
  public asiento: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.titulo = 'Home';
    this.asiento = null;
	}

	ngOnInit(){
		console.log('home.component.ts cargado');
	}
}
