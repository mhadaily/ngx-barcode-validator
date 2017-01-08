import { Component, ViewChild, OnDestroy } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { BarcodeValidatorService } from "../../services/barcode-validator.service";
import { BarcodeDecoderService } from "../../services/barcode-decoder.service";

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnDestroy {
  
  @ViewChild('isbn') isbn;
  
  resultUrl: any;
  resultCode: any;
  
  constructor(private sanitizer: DomSanitizer,
              private validatorService: BarcodeValidatorService,
              private decoderService: BarcodeDecoderService) { }
  
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  
  setResultUrl(url) {
    this.resultUrl = this.sanitize(url);
    return url;
  }
  
  onChange(e) {
    if (!e.target.files && !e.target.files.length) {
      throw new Error('cannot find uploaded file;');
    }
    const file = URL.createObjectURL(e.target.files[0]);
    
    this.decoderService.onDecodeSingle(this.setResultUrl(file))
        .then(code => {
          this.isbn.nativeElement.value = code;
          this.decoderService.onPlaySound();
          this.validate(code);
        })
        .catch(e => console.error(e));
  }
  
  validate(code) {
    this.validatorService.doSearchByCode(code)
        .subscribe(code => this.resultCode = code)
  }
  
  ngOnDestroy() {
    console.info('Stopped!')
  }
  
}
