import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable";
import { catchError, debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";


@Injectable()
export class BarcodeValidatorService {
  
  constructor(private _http: HttpClient) { }
  
  private endpoints = {
    search: 'https://mutec.gomus.de/api/v3/barcodes/',//sample endpoint to validate your barcode
  };
  
  doSearchbyCode(codes: Observable<any>, debounceMs = 400) {
    return codes
      .pipe(
        debounceTime(debounceMs),
        distinctUntilChanged(),
        switchMap(code => this.rawSearchByCode(code)),
      )
  }
  
  rawSearchByCode(code): Observable<any> {
    return this._http
               .get(`${this.endpoints.search}${code}`)
               .pipe(
                 catchError(this.handleError),
               )
  }
  
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
  
}

