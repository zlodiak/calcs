import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { RateService } from '../services/rate.service';


@Component({
  selector: 'app-conv-dialog',
  templateUrl: './conv-dialog.component.html',
  styleUrls: ['./conv-dialog.component.css']
})
export class ConvDialogComponent implements OnInit {

	private rate: Object = {};
	private targetRates: Object = {};
	private fieldsValues: Object = {
		rur: '',
		usd: '',
		eur: '',
		gbp: '',
		chf: ''
	};

  constructor(private rateService: RateService) { }

  ngOnInit() {
  	this.getRate();
  }  

  private handlerClickField(valuteName): void {
  	console.log(valuteName);

		for(var prop in this.fieldsValues) {
		  if (prop == valuteName) continue;
		  this.fieldsValues[prop] = '';
		};
  };

  private getRate(): void {
    this.rateService
        .getRate()
        .subscribe(data => {        						
        						this.rate = JSON.parse(data._body);
                    console.log(typeof this.rate, this.rate);                    
                    this.targetRates = {
                    	usd: this.rate['Valute']['USD']['Value'],
                    	eur: this.rate['Valute']['EUR']['Value'],
                    	gbp: this.rate['Valute']['GBP']['Value'],
                    	chf: this.rate['Valute']['CHF']['Value']
                    };

                    console.log(this.targetRates);

                  }, 
                  err => {
                    console.log('err')         
                  });    
  };  

  private handlerClickCalcBtn(): void {
  	console.log(123, this.fieldsValues);
  };

  private isDisabledCalcBtn(): boolean {
  	let result = false;
  	
  	if(	this.fieldsValues['rur'] == '' && 
  			this.fieldsValues['usd'] == '' && 
  			this.fieldsValues['eur'] == '' && 
  			this.fieldsValues['gbp'] == '' && 
  			this.fieldsValues['chf'] == '') {	result = true; }

  	return result;
  };

}
