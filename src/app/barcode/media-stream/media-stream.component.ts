import { Component, OnInit, OnDestroy, ViewChild, AfterContentInit, DoCheck } from '@angular/core';
import { BarcodeDecoderService } from "../../services/barcode-decoder.service";

@Component({
  selector: 'app-media-stream',
  templateUrl: './media-stream.component.html',
  styleUrls: ['./media-stream.component.scss']
})
export class MediaStreamComponent implements OnInit,OnDestroy,AfterContentInit,DoCheck {
  
  lastResult: any;
  
  @ViewChild('interactive') interactive;
  
  constructor (private decoderService: BarcodeDecoderService) {};
  
  ngDoCheck () {
    this.decoderService.onDecodeDetected()
        .then(code => {
          this.lastResult = code;
          this.decoderService.onPlaySound();
        })
        .catch((err) => console.error(err));
  }
  
  ngOnInit () {
    this.decoderService.onLiveStreamInit();
    this.decoderService.onDecodeProcessed();
  }
  
  ngAfterContentInit () {
    this.interactive.nativeElement.children[0].style.position = 'absolute';
  }
  
  ngOnDestroy () {
    this.decoderService.onDecodeStop();
  }
  
}
