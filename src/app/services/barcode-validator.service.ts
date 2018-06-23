import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable()
export class BarcodeValidatorService {

  constructor(private _http: HttpClient) { }

  private endpoints = {
    search: 'https://exmpale-barcode-service.com',//sample endpoint to validate your barcode
  };

  doSearchbyCode(codes: Observable<any>, debounceMs = 400) {
    return codes
      .pipe(
        debounceTime(debounceMs),
        distinctUntilChanged(),
        switchMap(code => this.rawSearchByCode(code)),
      );
  }

  rawSearchByCode(code): Observable<any> {
    /** Uncomment if you have you want to active your barcode service to be validated from a URL
     return this._http
     .get(`${this.endpoints.search}${code}`)
     .pipe(
     catchError(this.handleError),
     )
     */
    return of('Your Barcode Service Provider Sample Message');

  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}

