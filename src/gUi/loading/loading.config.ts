import { InjectionToken } from '@angular/core';

export interface LoadingConfig {
  html: string;
  defaultClass: string;
  defaultAnimation: string;
}

export let LOADING_CONFIG = new InjectionToken<LoadingConfig>('loading.config');
