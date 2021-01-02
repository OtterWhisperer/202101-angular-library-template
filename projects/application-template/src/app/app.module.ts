import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibraryTemplateModule } from 'library-template';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibraryTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
