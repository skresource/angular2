import { Injectable } from '@angular/core';
import { Http,	HttpModule ,  Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw'; 

@Injectable()
export class productService{
	constructor(
		private http: Http
	){}
	
	getProduct(): string {
		return 'Hello world test';
	}
	
	_errorHandler(error: Response){
		return Observable.throw(error || "Server Error");
	} 
	
	getProductList(){ 
		 return this.http.get('https://api.github.com/users/mralexgray/repos')
				 .map((response: Response) => response.json())
				 .catch(this._errorHandler);
	}
	
	
}