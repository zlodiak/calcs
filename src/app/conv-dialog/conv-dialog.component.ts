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

  constructor(private rateService: RateService) { }

  ngOnInit() {
  	this.getRate();
  }  

  private getRate(): void {
    this.rateService
        .getRate()
        .subscribe(data => {        						
        						this.rate = JSON.parse(data._body);
                    console.log(typeof data._body, data._body);
                    console.log(typeof this.rate, this.rate);
                    //console.log(this.rate.Date);
                    //this.targetRates = this.rate.Valute.USD.Value;

										/*for(var prop in this.rate) {
										  if (!this.rate.hasOwnProperty(prop)) continue;
										  console.log(prop, this.rate[prop]);
										}*/


                  }, 
                  err => {
                    console.log('err')         
                  });    
  };  

}
