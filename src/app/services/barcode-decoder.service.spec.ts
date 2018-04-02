/* tslint:disable:no-unused-variable */

import { BarcodeDecoderService } from './barcode-decoder.service';
import { inject, TestBed } from '@angular/core/testing';

describe('BarcodeDecoderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarcodeDecoderService],
    });
  });

  it('should ...', inject([BarcodeDecoderService], (service: BarcodeDecoderService) => {
    expect(service).toBeTruthy();
  }));
});
