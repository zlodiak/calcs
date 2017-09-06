import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';

import { MdDialog, MdDialogRef } from '@angular/material';

import { RateService } from '../services/rate.service';
import { OkDialogComponent } from '../ok-dialog/ok-dialog.component';

import { GlobalVarsService } from '../services/global-vars.service';


@Component({
  selector: 'app-conv-dialog',
  templateUrl: './conv-dialog.component.html',
  styleUrls: ['./conv-dialog.component.css']
})
export class ConvDialogComponent implements OnInit {

  private isVisibleFlags: boolean;
  private accuracy: number;
	private rate: Object = {};
	private targetRates: Object = {};
	private fieldsValues: Object = {
		rur: '',
		usd: '',
		eur: '',
		gbp: '',
		chf: ''
	};

  @Output() onChangeVisibilitySpinner = new EventEmitter<boolean>();

  constructor(private rateService: RateService, 
              public dialog: MdDialog, 
              public dialogRef: MdDialogRef<ConvDialogComponent>,
              public globalVarsService: GlobalVarsService) { 
    this.accuracy = this.globalVarsService.getVar('accuracy'); 
    this.isVisibleFlags = this.globalVarsService.getVar('isVisibleFlags'); 
  };

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
    if( isNaN(this.fieldsValues['rur']) == true ||
        isNaN(this.fieldsValues['usd']) == true ||
        isNaN(this.fieldsValues['eur']) == true ||
        isNaN(this.fieldsValues['gbp']) == true ||
        isNaN(this.fieldsValues['chf']) == true) { 
                                                    let dialogRef = this.dialog.open(OkDialogComponent);
                                                    setTimeout(function() {
                                                      dialogRef.close();
                                                    }, 2000);                                           
                                                    return; 
    }

  	if(this.fieldsValues['rur'] != '') { 		
 			this.calcValutesFromRur();
  	} else {
  		if(this.fieldsValues['usd'] != '') {
	  		this.fieldsValues['rur'] = (this.fieldsValues['usd'] * this.targetRates['usd']).toFixed(this.accuracy);			
  		} else if(this.fieldsValues['eur'] != '') {
  			this.fieldsValues['rur'] = (this.fieldsValues['eur'] * this.targetRates['eur']).toFixed(this.accuracy);
  		} else if(this.fieldsValues['eur'] != '') {
  			this.fieldsValues['rur'] = (this.fieldsValues['eur'] * this.targetRates['eur']).toFixed(this.accuracy);
  		} else if(this.fieldsValues['gbp'] != '') {
  			this.fieldsValues['rur'] = (this.fieldsValues['gbp'] * this.targetRates['gbp']).toFixed(this.accuracy);
  		} else if(this.fieldsValues['chf'] != '') {
  			this.fieldsValues['rur'] = (this.fieldsValues['chf'] * this.targetRates['chf']).toFixed(this.accuracy);
  		}
  		this.calcValutesFromRur();
  	}
  };

  private calcValutesFromRur(): void {
    this.onChangeVisibilitySpinner.emit(true);

    setTimeout(function() {
      //
    }, 500);

		for(var prop in this.targetRates) {
		  if (prop == 'rus') continue;
		  this.fieldsValues[prop] = (this.fieldsValues['rur'] / this.targetRates[prop]).toFixed(this.accuracy);
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
