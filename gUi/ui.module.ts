import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GButtonComponent } from './gButton/gButton.component';
import { LoadingComponent } from './loading/loading.component';

const coms = [
  GButtonComponent,
  LoadingComponent,
]

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: coms,
  declarations: coms,
  providers: [],
})
export class UIComponentModule { }
