import {
  Directive,
  Component,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/Observable/fromPromise";

/**
 * type = 'contract' | 'contract-overlay' |
 *        'zoom-in' | 'zoom-out' |
 *        'expand-left' | 'expand-right'|
 *        'expand-up' | 'expand-down' |
 *        'slide-left' | 'slide-right' |
 *        'slide-up' | 'slide-down' |
 */

/**
 * size = 'extra-small' | 'small' | 'large' | 'extra-lagre'
 */

/**
 * @param {string} type 加载类型
 * @param {string} size 尺寸
 * @param {number} progress 加载位置
 *
 * @export
 * @class LoadingClickComponent
 */

@Component({
  selector: "g-loading-button",
  template: `
    <button (click)="active($event)">
      <loading type="button" *ngIf="loading"></loading>
      <ng-content></ng-content>
    </button>
  `
})
export class LoadingClickComponent {
  loading = false;

  type = "expand-left";
  size = "normal";

  @Input() progress: number;

  @Output() click: EventEmitter<any> = new EventEmitter();

  constructor(
    private el: ElementRef
  ) {

  }

  toggleLoading() {
    this.loading = !this.loading;
  }

  active(event: MouseEvent) {
    let proObj: ProgressEvent = {
      MouseEvent: event
    };
    this.toggleLoading();
    this.click.emit(proObj);
    let subscripter;
    if (proObj.promise && proObj.promise instanceof Promise) {
      subscripter = Observable.fromPromise(proObj.promise);
    } else {
      subscripter = proObj.promise;
    }

    subscripter.subscribe((res) => {
      console.log(123);
      this.toggleLoading();
    })
  }
}

interface ProgressEvent {
  promise?: Promise<any> | Subscription;
  MouseEvent: MouseEvent;
}
