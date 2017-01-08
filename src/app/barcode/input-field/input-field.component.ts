import { Component, ViewChild, OnDestroy } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { ValidateBarcodeService } from "../../services/validate-barcode.service";
import { BarcodeDecoderService } from "../../services/barcode-decoder.service";


declare const Quagga: any;

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnDestroy {
  
  @ViewChild('isbn') isbn;
  
  resultUrl: any;
  resultCode: any;
  
  constructor (private sanitizer: DomSanitizer, private validateBarcode: ValidateBarcodeService, private decode: BarcodeDecoderService) { }
  
  sanitize (url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  
  setResultUrl (url) {
    this.resultUrl = this.sanitize(url);
    return url;
  }
  
  onChange (e) {
    if (!e.target.files && !e.target.files.length) {
      throw new Error('cannot find uploaded file;');
    }
    const file = URL.createObjectURL(e.target.files[0]);
    
    this.decode.onDecodeSingle(this.setResultUrl(file))
        .then(code => {
          this.isbn.nativeElement.value = code;
          this.decode.onPlaySound();
          this.validate(code);
        })
        .catch(e => console.error(e));
  }
  
  validate (code) {
    this.validateBarcode.doSearchByCode(code)
        .subscribe(code => this.resultCode = code)
  }
  
  ngOnDestroy () {
    console.log('stopped')
  }
  
}
