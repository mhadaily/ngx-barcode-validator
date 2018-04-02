import { Component } from '@angular/core';

@Component({
  selector: 'app-barcode',
  template: `
    <mat-card class="text-center">
      <h3 class="text-center">Barcode Scanner</h3>
      <p>User Instant Search or Alternatively you can upload your barcode or scan via webcam/camera</p>
      <button mat-fab [routerLink]="['field']">
        <mat-icon>file_upload</mat-icon>
      </button>
      <button mat-fab [routerLink]="['media']">
        <mat-icon>camera</mat-icon>
      </button>
    </mat-card>
    
    <mat-card>
      <router-outlet></router-outlet>
    </mat-card>
  `,
  styleUrls: ['./barcode.component.scss'],
})
export class BarcodeComponent {}
