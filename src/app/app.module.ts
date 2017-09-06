import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MdButtonModule, 
          MdDialogModule,
          MdInputModule,
          MdProgressSpinnerModule,
          MdCardModule,
          MdRadioModule,
          MdSlideToggleModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ConvDialogComponent } from './conv-dialog/conv-dialog.component';
import { RateService } from './services/rate.service';
import { OkDialogComponent } from './ok-dialog/ok-dialog.component';

import { GlobalVarsService } from './services/global-vars.service';

@NgModule({
  declarations: [
    AppComponent,
    ConvDialogComponent,
    OkDialogComponent
  ],
  imports: [
    MdSlideToggleModule,
    MdRadioModule,
    MdCardModule,
    MdProgressSpinnerModule,
    FormsModule,
    HttpModule,
    MdInputModule,
    MdDialogModule,
    BrowserAnimationsModule,
    MdButtonModule,
    BrowserModule
  ],
  providers: [
    GlobalVarsService,
    RateService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConvDialogComponent, 
    OkDialogComponent
  ]
})
export class AppModule { }
