import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MdButtonModule, 
          MdDialogModule,
          MdInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ConvDialogComponent } from './conv-dialog/conv-dialog.component';

import { RateService } from './services/rate.service';

@NgModule({
  declarations: [
    AppComponent,
    ConvDialogComponent
  ],
  imports: [
    HttpModule,
    MdInputModule,
    MdDialogModule,
    BrowserAnimationsModule,
    MdButtonModule,
    BrowserModule
  ],
  providers: [
    RateService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConvDialogComponent]
})
export class AppModule { }
