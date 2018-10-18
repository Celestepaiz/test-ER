import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class TotemApisService {

  public url: string;
  public identity;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

    getIDFromLogin(){
      let headers = new Headers({
        'Content-Type':'application/json'
      });

      let options = new RequestOptions({ headers: headers });

      return this._http.get(this.url+'get-login-id', options).pipe(map(res => res.json()));
    }

    getCorridas(parametros){

		  let headers = new Headers({
				'Content-Type':'application/json'
			});

		    return this._http.get(this.url+'get-corridas-id/'+parametros.salida+'/'+parametros.llegada+'/'+parametros.id+'/'+parametros.fecha, {headers: headers}).pipe(map(res => res.json()));
    }

    getIdentity(){
  		let identity = JSON.parse(localStorage.getItem('myID'));

  		if(identity != "undefined"){
  			this.identity = identity;
  		}else{
  			this.identity = null;
  		}

  		return this.identity;
  	}
  }
