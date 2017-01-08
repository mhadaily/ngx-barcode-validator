import { Injectable } from '@angular/core';
import { DECODER_CONFIG } from "../config/decoder-config";

declare const Quagga: any;

@Injectable()
export class BarcodeDecoderService {
  
  constructor () { }
  
  
  onDecodeSingle (src) {
    DECODER_CONFIG.src = src;
    
    // Promisify DecodeSingle method from Quagga
    return new Promise((resolve, reject) => {
      Quagga.decodeSingle(DECODER_CONFIG, result => {
        const code = result.codeResult.code;
        if (!code) {
          reject('Cannot be Detected, Please Try again!');
        }
        resolve(code)
      });
    });
  }
}
