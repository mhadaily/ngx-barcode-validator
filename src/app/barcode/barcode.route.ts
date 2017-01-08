import { Routes } from "@angular/router";
import { MediaStreamComponent } from "./media-stream/media-stream.component";
import { InputFieldComponent } from "./input-field/input-field.component";
import { InstantSearchComponent } from "./instant-search/instant-search.component";

export const BARCODE_ROUTE: Routes = [
  {
    path: 'search',
    component: InstantSearchComponent
  },
  {
    path: 'media',
    component: MediaStreamComponent
  },
  {
    path: 'field',
    component: InputFieldComponent
  },
];
