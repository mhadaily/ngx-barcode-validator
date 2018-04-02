import { NgModule } from '@angular/core';
import { BarcodeDecoderService } from '../services/barcode-decoder.service';
import { BarcodeValidatorService } from '../services/barcode-validator.service';
import { SharedModule } from './shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  providers: [
    BarcodeValidatorService,
    BarcodeDecoderService,
  ],
  exports: [
    SharedModule,
  ],
})

export class CoreModule {}
