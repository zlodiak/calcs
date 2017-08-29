import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MdButtonModule, 
          MdDialogModule,
          MdInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ConvDialogComponent } from './conv-dialog/conv-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvDialogComponent
  ],
  imports: [
    MdInputModule,
    MdDialogModule,
    BrowserAnimationsModule,
    MdButtonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConvDialogComponent]
})
export class AppModule { }
