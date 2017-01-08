import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

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
  
  
  rawSearchByCode(code): Promise<any> {
    return this._http.get(`${this.endpoints.search}${code}`)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message|| error);
  }
  
}

