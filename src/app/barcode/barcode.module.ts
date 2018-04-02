import { NgModule } from '@angular/core';
import { SharedModule } from '../modules/shared.module';
import { BarcodeRouteModule } from './barcode.route';
import { BarcodeComponent } from './barcode.component';
import { InstantSearchComponent } from './instant-search/instant-search.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { MediaStreamComponent } from './media-stream/media-stream.component';

@NgModule({
  imports: [
    SharedModule,
    BarcodeRouteModule,
  ],
  declarations: [
    BarcodeComponent,
    InstantSearchComponent,
    InputFieldComponent,
    MediaStreamComponent,
  ],
})

export class BarcodeModule {}
