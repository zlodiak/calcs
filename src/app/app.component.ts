import { Component } from '@angular/core';

import { MdDialog } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';

import { ConvDialogComponent } from './conv-dialog/conv-dialog.component';

import { GlobalVarsService } from './services/global-vars.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	private isVisibleFlags: boolean;
	private accuracy: number;

  constructor(public dialog: MdDialog, public globalVarsService: GlobalVarsService) {
  	this.accuracy = globalVarsService.getVar('accuracy');
  	this.isVisibleFlags = globalVarsService.getVar('isVisibleFlags');
  };

	private openMoneyConverter(): void {
		this.dialog.open(ConvDialogComponent);
	};

	private changeAccuracy(val): void {
		this.globalVarsService.setVar('accuracy', val);
		this.accuracy = this.globalVarsService.getVar('accuracy');
	};

	private changeVisibilityFlags(): void {
		let this_ = this;
		setTimeout(function() {
			this_.globalVarsService.setVar('isVisibleFlags', this_.isVisibleFlags);
		}, 100);
		
	};

}




