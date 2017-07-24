import {
  Component,
  OnInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'loading',
  template: `
    <div class="loading {{className}}"></div>
  `,
  styleUrls: ['./loading.component.scss'],
})

export class LoadingComponent implements OnInit {

  @Input() className = 'default';

  constructor() { }

  ngOnInit() { }
}
