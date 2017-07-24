import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { toggleWidth } from '../animation/toggleWidth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Component({
  selector: 'g-button',
  template: `
    <button (click)="toggleLoading()">
      <loading class="loading-box" *ngIf="loading"
            [@toggleWidth]="'in'"></loading>
      <span class="content"><ng-content></ng-content></span>
    </button>
  `,
  styleUrls: ['./base.style.scss'],
  animations: toggleWidth(),
})

export class GButtonComponent implements OnInit {

 @Output() gClick = new EventEmitter();

  loading = false;

  constructor() { }

  ngOnInit() { }

  toggleLoading() {
    let returnData: {
      return: Observable<any> | Promise<any>
    } = {
      return: null
    };

    this['gClick'].emit(returnData);

    if (returnData.return) {
      if (!(returnData.return instanceof Promise || returnData.return instanceof Observable)) {
        throw new Error(`the \"return\" attribute must instance Obserable or Promise`)
      }

      this.loading = true;
      let observabler

      if ((<Promise<any>> returnData.return).then) {
        observabler = Observable.fromPromise((<Promise<any>> returnData.return));
      } else {
        observabler = returnData.return;
      }
      observabler.subscribe(() => {
        this.loading = false;
      });
    }
  }
}
