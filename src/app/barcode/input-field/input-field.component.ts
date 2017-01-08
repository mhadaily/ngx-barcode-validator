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
  error: any;
  
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
          this.error = `Something is wrong: ${e}`;
        });
  }
  
  onCancel(e){
    this.setStartProgress();
    this.error = `Something is wrong: Please Select An Image`;
  }
  
  onClick() {
    this.setStartProgress();
    this.fileInputbox.nativeElement.click();
    this.error = null;
  }
  
  validate(code) {
    this.validatorService.doSearchByCode(code)
        .subscribe(res => console.log(res,1))
  }
  
  ngOnDestroy() {
    console.info('Stopped!')
  }
  
}
