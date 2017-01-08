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
  @ViewChild('fileInputbox') fileInputbox;
  
  resultUrl: any;
  resultCode: any;
  startProgress: boolean = false;
  
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
  
  setStartProgress() {
    this.startProgress = !this.startProgress;
  }
  
  onChange(e) {
    if (!e.target.files && !e.target.files.length) {
      throw new Error('cannot find uploaded file;');
    }
    const file = URL.createObjectURL(e.target.files[0]);
    
    this.decoderService.onDecodeSingle(this.setResultUrl(file))
        .then(code => {
          this.isbn.value = code;
          this.decoderService.onPlaySound();
          this.validate(code);
          this.resultCode = code;
          this.setStartProgress();
        })
        .catch(e => {
          this.setStartProgress();
          console.log(e);
        });
  }
  
  onClick() {
    this.setStartProgress();
    this.fileInputbox.nativeElement.click();
  }
  
  
  validate(code) {
    this.validatorService.doSearchByCode(code)
        .subscribe(code => console.log(code))
  }
  
  ngOnDestroy() {
    console.info('Stopped!')
  }
  
}
