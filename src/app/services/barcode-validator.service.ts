import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class BarcodeValidatorService {
  
  constructor(private _http: Http) { }
  
  private endpoints = {
    search: 'https://mutec.gomus.de/api/v3/barcodes/',
  };
  
  
  doSearchbyCode(codes: Observable<any>, debounceMs = 400) {
    return codes
      .debounceTime(debounceMs)
      .distinctUntilChanged()
      .switchMap(code => this.rawSearchByCode(code));
  }
  
  
  rawSearchByCode(code): Observable<any> {
    return this._http.get(`${this.endpoints.search}${code}`)
               .map(response => response.json())
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
  
}

