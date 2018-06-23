import { Component, OnInit } from '@angular/core';
import { BarcodeValidatorService } from '../../services/barcode-validator.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-instant-search',
  template: `
    <mat-card>
      <input class="instantInput" (input)="code$.next($event.target.value)" (keydown)="onChange()"
             placeholder="Type your barcode number">
      <div class="flex-container text-center" fxLayout="row" fxLayoutAlign="center center">
        <div class="flex-item">
          <mat-spinner color="accent" class="app-spinner" *ngIf="spinner"></mat-spinner>
        </div>
        <div class="flex-item" *ngIf="!spinner">
          <mat-card *ngIf="message"> {{message}}</mat-card>
        </div>
      </div>
    </mat-card>
  `,
})
export class InstantSearchComponent implements OnInit {

  spinner: boolean;
  message: string;


  code$ = new Subject<any>();

  constructor(private barcodeValidator: BarcodeValidatorService) {}

  ngOnInit() {
    this.barcodeValidator
      .doSearchbyCode(this.code$)
      .subscribe(
        res => {
          this.spinner = false;
          this.message = res;
        },
        err => {
          this.spinner = false;
          this.message = `An Error! ${err.json().error}`;
        },
      );
  }

  onChange() {
    this.spinner = true;
  }

}
