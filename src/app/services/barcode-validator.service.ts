import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class BarcodeValidatorService {
  
  constructor(private _http: Http) { }
  
  private endpoints = {
    search: 'https://mutec.gomus.de/api/v3/barcodes/',
  };
  
  doSearchByCode(code): Observable<any> {
    return this._http.get(`${this.endpoints.search}${code}`)
               .map((res: Response) => res.json())
               .catch((error: any) => Observable.throw(error.json().error || 'Server Error!'))
  }
  
}
