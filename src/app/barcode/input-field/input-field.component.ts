import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { DomSanitizer } from "@angular/platform-browser";
import { ValidateBarcodeService } from "../../validate-barcode.service";

declare const Quagga: any;

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit,OnDestroy {
  
  @ViewChild('isbn') isbn;
  
  config: any;
  resultUrl: any;
  codeNumber: string;
  resultCode: any;
  
  constructor (private sanitizer: DomSanitizer, private validateBarcode: ValidateBarcodeService) { }
  
  ngOnInit () {
    this.config = {
      inputStream: {
        size: 800
      },
      locator: {
        patchSize: "medium",
        halfSample: false
      },
      numOfWorkers: 1,
      decoder: {
        readers: ['ean_reader', 'code_128_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader',
          'codabar_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader']
      },
      locate: true,
      src: null
    };
  }
  
  
  decode (src) {
    this.config.src = src;
    Quagga.decodeSingle(this.config, result => {
      let code = result.codeResult.code;
      this.isbn.nativeElement.value = code;
      this.codeNumber = code;
      this.validate(code);
    });
  }
  
  sanitize (url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  
  setResultUrl (url) {
    this.resultUrl = this.sanitize(url);
    return url;
  }
  
  onChange (e) {
    if (e.target.files && e.target.files.length) {
      const file = URL.createObjectURL(e.target.files[0]);
      this.decode(this.setResultUrl(file));
    }
  }
  
  validate(code){
    this.validateBarcode.doSearchByCode(code)
      .subscribe(code=> this.resultCode = code)
  }
  
  ngOnDestroy () {
    console.log('stopped')
  }
  
}
