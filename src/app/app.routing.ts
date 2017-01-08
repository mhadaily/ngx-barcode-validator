import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { Material2Component } from "./material2/material2.component";
import { HomeComponent } from "./home/home.component";
import { BarcodeComponent } from "./barcode/barcode.component";
import { BARCODE_ROUTE } from "./barcode/barcode.route";


const APP_ROUTES: Routes = [
  
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'barcode',
    component: BarcodeComponent,
    children: BARCODE_ROUTE,
  },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'material',
    component: Material2Component
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
 
];

export const routing = RouterModule.forRoot(APP_ROUTES);

