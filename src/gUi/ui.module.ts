import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GButtonComponent } from './gButton/gButton.component';
import { LoadingComponent } from './loading/loading.component';

import { LoadingConfig, LOADING_CONFIG } from './loading/loading.config';

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
export class UIComponentModule {
  static forRoot(config?: LoadingConfig): ModuleWithProviders {
    return {
      ngModule: UIComponentModule,
      providers: [
        {provide: LOADING_CONFIG, useValue: config}
      ]
    }
  }
}
