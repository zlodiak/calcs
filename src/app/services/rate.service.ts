import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';



@Injectable()
export class RateService {

  constructor(private http: Http) {};

  getRate(): Observable<any> {
  	let result = this.http.get('https://www.cbr-xml-daily.ru/daily_json.js');
  	return result;
  };

       

}
