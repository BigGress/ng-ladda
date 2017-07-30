import {Component, OnInit, Input, ElementRef } from "@angular/core";

@Component({
  selector: "loading",
  // templateUrl: "./loading.component.html"
  template: `
    <div class="for-button" *ngIf="type === 'button'">
        <div [ngStyle]="forButton.outSide" class="loading">
            <span [ngStyle]="forButton.inSide" class="inside"></span>
        </div>
    </div>
    <div class="for-page" *ngIf="type === 'page'">
      <div [ngStyle]="{'width.px': size, 'height.px': size}" class="lds-cube">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  `,
  styleUrls: ["./loading.component.scss"],
})

export class LoadingComponent implements OnInit {

  colors: string[] = ["#64533b", "#80a352"];
  size: number;

  type: string;

  forButton: any = {
    outSide: {},
    inSide: {},
  }

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit() {
    if (!this.size) {
      this.size = 30;
    }

    if (!this.type) {
      this.type = "default";
    }

    this.type = this.element.nativeElement.getAttribute("type");

    this.setButtonLoadingColor();


  }

  /**
   * 设置loading的颜色
   *
   * @memberof LoadingComponent
   */
  setButtonLoadingColor() {
    this.forButton.outSide = {
      "border-left-color": this.colors[0],
      "border-right-color": this.colors[0],
      "width.px": this.size,
      "height.px": this.size,
    }

    this.forButton.inSide = {
      "border-top-color": this.colors[1],
      "border-bottom-color": this.colors[1],
      "width.px": this.size - 6,
      "height.px": this.size - 6,
    }

  }
}
