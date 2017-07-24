import {
  trigger,
  style,
  animate,
  transition,
  state,
} from '@angular/animations';

export function toggleWidth() {
  return [
    trigger('toggleWidth', [
      state('in', style({width: '*'})),
      transition('void => *', [
        style({width: 0}),
        animate(`200ms ease-in`, style({width: '*'}))
      ]),
      transition('* => void', [
        style({width: '*'}),
        animate(`200ms ease-in`, style({width: 0}))
      ])
    ])
  ]
}
