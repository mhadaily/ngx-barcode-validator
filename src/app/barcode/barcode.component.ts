import { Component } from '@angular/core';

@Component({
  selector: 'app-barcode',
  template: `
    <mat-card class="text-center">
      <h3 class="text-center">Barcode Scanner</h3>
      <p>User Instant Search or Alternatively you can upload your barcode or scan via webcam/camera</p>
      <div class="flex-container" fxLayout="row" fxLayoutAlign="center center">
        <div class="flex-item" [routerLink]="['field']">
          <button mat-fab>
            <mat-icon>file_upload</mat-icon>
          </button>
        </div>
        <div class="flex-item" [routerLink]="['media']">
          <button mat-fab>
            <mat-icon>camera</mat-icon>
          </button>
        </div>
      </div>
    </mat-card>
    
    <mat-card>
      <router-outlet></router-outlet>
    </mat-card>
  `,
  styleUrls: ['./barcode.component.scss']
})
export class BarcodeComponent {
}
