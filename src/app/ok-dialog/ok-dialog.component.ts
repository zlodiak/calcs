import { Component, OnInit } from '@angular/core';

import { MdDialogRef } from '@angular/material';


@Component({
  selector: 'app-ok-dialog',
  templateUrl: './ok-dialog.component.html',
  styleUrls: ['./ok-dialog.component.css']
})
export class OkDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<OkDialogComponent>) { }

  ngOnInit() {

  }

}
