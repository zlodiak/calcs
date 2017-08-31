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
  	if(this.fieldsValues['rur'] != '') { 		
 			this.calcValutesFromRur();
  	} else {
  		if(this.fieldsValues['usd'] != '') {
	  		this.fieldsValues['rur'] = (this.fieldsValues['usd'] * this.targetRates['usd']).toFixed(2);			
  		} else if(this.fieldsValues['eur'] != '') {
  			this.fieldsValues['rur'] = (this.fieldsValues['eur'] * this.targetRates['eur']).toFixed(2);
  		} else if(this.fieldsValues['eur'] != '') {
  			this.fieldsValues['rur'] = (this.fieldsValues['eur'] * this.targetRates['eur']).toFixed(2);
  		} else if(this.fieldsValues['gbp'] != '') {
  			this.fieldsValues['rur'] = (this.fieldsValues['gbp'] * this.targetRates['gbp']).toFixed(2);
  		} else if(this.fieldsValues['chf'] != '') {
  			this.fieldsValues['rur'] = (this.fieldsValues['chf'] * this.targetRates['chf']).toFixed(2);
  		}
  		this.calcValutesFromRur();
  	}
  };

  private calcValutesFromRur(): void {
		for(var prop in this.targetRates) {
		  if (prop == 'rus') continue;
		  this.fieldsValues[prop] = (this.fieldsValues['rur'] / this.targetRates[prop]).toFixed(2);
		};   	
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
