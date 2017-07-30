import {
  Component,
  OnInit,
  Input,
  Inject
} from '@angular/core';

import { LOADING_CONFIG, LoadingConfig } from './loading.config';

@Component({
  selector: 'loading',
  template: `
    <div class="loading {{className}} {{animationName}}" *ngIf="!showCustom"></div>
    <div *ngIf="showCustom" [innerHTML]="config.html"></div>
  `,
  styleUrls: ['./loading.component.scss'],
})

export class LoadingComponent implements OnInit {

  @Input() animationName = 'rotate';

  @Input() className = 'default';

  showCustom = false;

  constructor(
    @Inject(LOADING_CONFIG) private config?
  ) {}

  ngOnInit() {
    if (this.config) {
      if (this.config.html) {
        this.showCustom = true;
      }
      if (this.config.defaultAnimation) {
        this.animationName = this.config.defaultAnimation;
      }
      if (this.config.defaultClass) {
        this.className = this.config.defaultClass;
      }
    }

  }
}
