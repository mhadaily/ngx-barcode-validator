import { Component, OnInit } from '@angular/core';
import { BarcodeValidatorService } from "../services/barcode-validator.service";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss']
})
export class BarcodeComponent implements OnInit {
  spinner: boolean;
  message: string;
  
  
  code$ = new Subject<any>();
  
  constructor(private barcodeValidator: BarcodeValidatorService) {}
  
  ngOnInit() {
    this.barcodeValidator.doSearchbyCode(this.code$)
        .subscribe(
          res => this.message = res,
          err => {
            this.message = `An Error! ${err.json().error}`
          }
        );
  }
}
