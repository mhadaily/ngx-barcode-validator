/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BarcodeDecoderService } from './barcode-decoder.service';

describe('BarcodeDecoderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarcodeDecoderService]
    });
  });

  it('should ...', inject([BarcodeDecoderService], (service: BarcodeDecoderService) => {
    expect(service).toBeTruthy();
  }));
});
