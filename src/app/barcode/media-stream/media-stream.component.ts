import { Component, OnInit, SimpleChanges, OnChanges, OnDestroy, ViewChild, AfterContentInit } from '@angular/core';
declare const Quagga: any;

@Component({
  selector: 'app-media-stream',
  templateUrl: './media-stream.component.html',
  styleUrls: ['./media-stream.component.scss']
})
export class MediaStreamComponent implements OnInit,OnChanges,OnDestroy,AfterContentInit {
  
  lastResult = "No Changes";
  
  @ViewChild('interactive') interactive;
    
  ngOnChanges (changes: SimpleChanges) {
    if (changes['lastResult']) {
       console.log(this.lastResult);
    }
  }
  
  ngOnInit () {
    let state = {
      inputStream: {
        type: "LiveStream",
        constraints: {
          width: {min: 640},
          height: {min: 480},
          facingMode: "environment",
          aspectRatio: {
            min: 1,
            max: 2
          }
        }
      },
      locator: {
        patchSize: "large",
        halfSample: true
      },
      numOfWorkers: 1,
      decoder: {
        readers: ['ean_reader', 'code_128_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader',
          'codabar_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader']
      },
      locate: true
    };
    
    Quagga.init(state, (err) => {
      if (err) {
        return console.error(err);
      }
      
      Quagga.start();
    });
    
    Quagga.onProcessed(this.onProcessed);
    
    Quagga.onDetected(this.logCode);
    
  }
  
  onProcessed (result: any) {
    let drawingCtx = Quagga.canvas.ctx.overlay,
      drawingCanvas = Quagga.canvas.dom.overlay;
    
    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
        result.boxes.filter(function (box) {
          return box !== result.box;
        }).forEach(function (box) {
          Quagga.ImageDebug.drawPath(box, {
            x: 0,
            y: 1
          }, drawingCtx, {
            color: "green",
            lineWidth: 2
          });
        });
      }
      
      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, {
          x: 0,
          y: 1
        }, drawingCtx, {
          color: "#00F",
          lineWidth: 2
        });
      }
      
      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(result.line, {
          x: 'x',
          y: 'y'
        }, drawingCtx, {
          color: 'red',
          lineWidth: 3
        });
      }
    }
  }
  
  logCode (result) {
     this.lastResult = result.codeResult.code;
     console.log(result);
  }
  
  ngAfterContentInit(){
    this.interactive.nativeElement.children[0].style.position = 'absolute';
  }
  
  ngOnDestroy(){
    Quagga.stop();
  }
  
}
