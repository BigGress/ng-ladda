import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";

import { UIModule } from "../../UI-Lab/ui.module";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    UIModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
