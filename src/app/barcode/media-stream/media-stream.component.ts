import { Component, OnInit, OnDestroy, ViewChild, AfterContentInit, DoCheck } from '@angular/core';
import { BarcodeDecoderService } from "../../services/barcode-decoder.service";
declare const Quagga: any;

@Component({
  selector: 'app-media-stream',
  templateUrl: './media-stream.component.html',
  styleUrls: ['./media-stream.component.scss']
})
export class MediaStreamComponent implements OnInit,OnDestroy,AfterContentInit,DoCheck {
  
  lastResult: any;
  
  @ViewChild('interactive') interactive;
  
  constructor (private decode: BarcodeDecoderService) {};
  
  ngDoCheck () {
    this.decode.onDecodeDetected()
        .then(code => {
          this.lastResult = code;
          this.decode.onPlaySound();
        })
        .catch((err) => console.error(err));
  }
  
  ngOnInit () {
    this.decode.onLiveStreamInit();
    this.decode.onDecodeProcessed();
  }
  
  ngAfterContentInit () {
    this.interactive.nativeElement.children[0].style.position = 'absolute';
  }
  
  ngOnDestroy () {
    this.decode.onDecodeStop();
  }
  
}
