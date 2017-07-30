import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UIComponentModule } from '../../src/gUi/ui.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UIComponentModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
