export let DECODER_CONFIG;
DECODER_CONFIG = {
  inputStream: {
    size: 800
  },
  locator: {
    patchSize: "medium",
    halfSample: false
  },
  numOfWorkers: 1,
  decoder: {
    readers: ['ean_reader', 'code_128_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader',
      'codabar_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader']
  },
  locate: true,
  src: null
};
