import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { BarcodeComponent } from "./barcode/barcode.component";
import { Material2Component } from "./material2/material2.component";
import { HomeComponent } from "./home/home.component";


const APP_ROUTES: Routes = [
  
  {path: '', component: HomeComponent},
  {path: 'app', component: AppComponent},
  {path: '404', component: NotFoundComponent},
  {path: 'barcode', component: BarcodeComponent},
  {path: 'material', component: Material2Component},
  {path: '**', redirectTo: '404', pathMatch: 'full'}

];

export const routing = RouterModule.forRoot(APP_ROUTES);

