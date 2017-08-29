import { Component } from '@angular/core';

import { MdDialog } from '@angular/material';

import { ConvDialogComponent } from './conv-dialog/conv-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MdDialog) {};
  
	private openMoneyConverter(): void {
		this.dialog.open(ConvDialogComponent);
	};

}




