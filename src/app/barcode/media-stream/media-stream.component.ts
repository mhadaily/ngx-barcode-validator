import { Component, OnInit, OnDestroy, ViewChild, AfterContentInit } from '@angular/core';
import { BarcodeDecoderService } from '../../services/barcode-decoder.service';
import { BarcodeValidatorService } from '../../services/barcode-validator.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-media-stream',
  templateUrl: './media-stream.component.html',
  styleUrls: ['./media-stream.component.scss'],
})
export class MediaStreamComponent implements OnInit, OnDestroy, AfterContentInit {

  lastResult: any;
  message: any;
  error: any;

  code$ = new Subject<any>();

  @ViewChild('interactive') interactive;

  constructor(private decoderService: BarcodeDecoderService, private barcodeValidator: BarcodeValidatorService) {};

  ngOnInit() {

    this.decoderService.onLiveStreamInit();
    this.decoderService.onDecodeProcessed();

    this.decoderService
      .onDecodeDetected()
      .then(code => {
        this.lastResult = code;
        this.decoderService.onPlaySound();
        this.code$.next(code);
      })
      .catch((err) => this.error = `Something Wrong: ${err}`);

    this.barcodeValidator
      .doSearchbyCode(this.code$)
      .subscribe(
        res => this.message = res,
        err => {
          this.message = `An Error! ${err.json().error}`;
        },
      );
  }

  ngAfterContentInit() {
    this.interactive.nativeElement.children[0].style.position = 'absolute';
  }

  ngOnDestroy() {
    this.decoderService.onDecodeStop();
  }

}
