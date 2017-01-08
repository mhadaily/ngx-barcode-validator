import { Routes } from "@angular/router";
import { MediaStreamComponent } from "./media-stream/media-stream.component";
import { InputFieldComponent } from "./input-field/input-field.component";

export const BARCODE_ROUTE: Routes = [
      {
        path: 'media',
        component: MediaStreamComponent
      },
      {
        path: 'field',
        component: InputFieldComponent
      },
];
