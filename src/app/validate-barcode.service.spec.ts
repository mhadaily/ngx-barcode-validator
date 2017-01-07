/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidateBarcodeService } from './validate-barcode.service';

describe('ValidateBarcodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateBarcodeService]
    });
  });

  it('should ...', inject([ValidateBarcodeService], (service: ValidateBarcodeService) => {
    expect(service).toBeTruthy();
  }));
});
