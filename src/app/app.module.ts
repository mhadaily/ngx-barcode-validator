import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { routing } from './app.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { MediaStreamComponent } from './barcode/media-stream/media-stream.component';
import { InputFieldComponent } from './barcode/input-field/input-field.component';
import { BarcodeValidatorService } from './services/barcode-validator.service';
import { BarcodeDecoderService } from './services/barcode-decoder.service';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { FabMenuComponent } from './shared/fab-menu/fab-menu.component';
import { InstantSearchComponent } from './barcode/instant-search/instant-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    BarcodeComponent,
    MediaStreamComponent,
    InputFieldComponent,
    ToolbarComponent,
    SidenavComponent,
    FabMenuComponent,
    InstantSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot(),
  ],
  providers: [BarcodeValidatorService, BarcodeDecoderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

