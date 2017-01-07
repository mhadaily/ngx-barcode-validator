import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { Material2Component } from './material2/material2.component';
import { DialogContentComponent } from './material2/dialog-content/dialog-content.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { HomeComponent } from './home/home.component';
import { MediaStreamComponent } from './barcode/media-stream/media-stream.component';
import { InputFieldComponent } from './barcode/input-field/input-field.component';

@NgModule({
  declarations: [
    AppComponent,
    Material2Component,
    DialogContentComponent,
    NotFoundComponent,
    BarcodeComponent,
    HomeComponent,
    MediaStreamComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot(),
  ],
  entryComponents: [DialogContentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

