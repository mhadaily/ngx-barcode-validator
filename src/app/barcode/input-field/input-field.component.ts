import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BarcodeValidatorService } from '../../services/barcode-validator.service';
import { BarcodeDecoderService } from '../../services/barcode-decoder.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent implements OnInit, OnDestroy {

  @ViewChild('isbn') isbn;
  @ViewChild('fileInputbox') fileInputbox;

  resultUrl: any;
  resultCode: any;
  startProgress: boolean = false;
  error: any;
  message: string;

  code$ = new Subject<any>();


  constructor(private sanitizer: DomSanitizer,
              private barcodeValidator: BarcodeValidatorService,
              private decoderService: BarcodeDecoderService) {}

  ngOnInit() {
    this.barcodeValidator.doSearchbyCode(this.code$)
      .subscribe(
        res => this.message = res,
        err => {
          this.message = `An Error! ${err.json().error}`;
        },
      );
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  setStartProgress() {
    this.startProgress = !this.startProgress;
  }

  onChange(e) {
    const file = URL.createObjectURL(e.target.files[0]);
    this.decoderService
      .onDecodeSingle(file)
      .then(code => {
        this.setStartProgress();
        this.resultUrl = this.sanitize(file);
        this.isbn.value = code;
        this.resultCode = code;
        this.decoderService.onPlaySound();
        this.code$.next(code);
      })
      .catch(e => {
        this.resultUrl = '';
        this.resultCode = '';
        this.isbn.value = '';
        this.setStartProgress();
        this.error = `Something is wrong: ${e}`;
      });
  }

  onCancel(e) {
    this.setStartProgress();
    this.error = `Something is wrong: Please Select An Image`;
  }

  onClick() {
    this.setStartProgress();
    this.fileInputbox.nativeElement.click();
    this.error = null;
  }

  ngOnDestroy() {
    console.info('Stopped!');
  }
}
