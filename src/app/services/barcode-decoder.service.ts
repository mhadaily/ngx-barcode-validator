import { Injectable } from '@angular/core';
import { DECODER_CONFIG } from "../config/decoder-config";

declare const Quagga: any;

@Injectable()
export class BarcodeDecoderService {
  
  sound = new Audio("assets/barcode.wav");
  
  constructor() {}
  
  onDecodeSingle(src) {
    DECODER_CONFIG.src = src;
    // Promisify DecodeSingle method from Quagga
    return new Promise((resolve, reject) => {
      Quagga.decodeSingle(DECODER_CONFIG, result => {
        if (result) {
          resolve(result.codeResult.code);
        }
        reject('File Cannot be Decode, Please Try a Valid Barcode;');
      });
    });
  }
  
  private setLiveStreamConfig() {
    DECODER_CONFIG.inputStream = {
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
    };
    return DECODER_CONFIG;
  }
  
  onLiveStreamInit() {
    const state = this.setLiveStreamConfig();
    Quagga.init(state, (err) => {
      if (err) {
        return console.error(err);
      }
      Quagga.start();
    });
  }
  
  onProcessed(result: any) {
    let drawingCtx = Quagga.canvas.ctx.overlay,
      drawingCanvas = Quagga.canvas.dom.overlay;
    
    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
        result.boxes.filter(function(box) {
          return box !== result.box;
        }).forEach(function(box) {
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
  
  onDecodeProcessed() {
    Quagga.onProcessed(this.onProcessed);
  }
  
  onDecodeDetected() {
    // Promisify OnDetected method from Quagga
    return new Promise((resolve, reject) => {
      Quagga.onDetected(result => {
        const code = result.codeResult.code;
        if (!code) {
          reject('Cannot be Detected, Please Try again!');
        }
        resolve(code);
      });
    });
  }
  
  onDecodeStop() {
    Quagga.stop();
    console.info('Camera Stopped Working!');
  }
  
  onPlaySound() {
    this.sound.play();
  }
  
}
