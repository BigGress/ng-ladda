import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UIComponentModule } from '../../gUi/ui.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UIComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
