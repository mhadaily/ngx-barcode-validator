import { Ng2BarcodeValidatorPage } from './app.po';

describe('ng2-barcode-validator App', function() {
  let page: Ng2BarcodeValidatorPage;

  beforeEach(() => {
    page = new Ng2BarcodeValidatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
