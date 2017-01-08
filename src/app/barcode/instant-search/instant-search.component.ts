import { Component, OnInit } from '@angular/core';
import { BarcodeValidatorService } from "../../services/barcode-validator.service";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-instant-search',
  templateUrl: './instant-search.component.html',
  styleUrls: ['./instant-search.component.scss']
})
export class InstantSearchComponent implements OnInit {
  
  spinner: boolean;
  message: string;
  
  
  code$ = new Subject<any>();
  
  constructor(private barcodeValidator: BarcodeValidatorService) {}
  
  ngOnInit() {
    this.barcodeValidator.doSearchbyCode(this.code$)
        .subscribe(
          res => {
            this.spinner = false;
            this.message = res
          },
          err => {
            this.spinner = false;
            this.message = `An Error! ${err.json().error}`
          }
        );
  }
  
  onChange() {
    this.spinner = true;
  }
  
}
