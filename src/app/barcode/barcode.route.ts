import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MediaStreamComponent } from './media-stream/media-stream.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { InstantSearchComponent } from './instant-search/instant-search.component';
import { BarcodeComponent } from './barcode.component';

export const BARCODE_ROUTE: Routes = [
  {
    path: '',
    component: BarcodeComponent,
    children: [
      {
        path: '',
        redirectTo: '/barcode/upload',
        pathMatch: 'full',
      },
      {
        path: 'upload',
        component: InstantSearchComponent,
        pathMatch: 'full',
      },
      {
        path: 'media',
        component: MediaStreamComponent,
        pathMatch: 'full',
      },
      {
        path: 'field',
        component: InputFieldComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(BARCODE_ROUTE),
  ],
  exports: [
    RouterModule,
  ],
})
export class BarcodeRouteModule {}
