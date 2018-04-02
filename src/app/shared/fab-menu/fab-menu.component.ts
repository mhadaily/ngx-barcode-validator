import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate, group, keyframes } from '@angular/animations';

@Component({
  selector: 'app-fab-menu',
  templateUrl: './fab-menu.component.html',
  styles: [],
  animations: [
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0px)',
      })),
      transition('void => *', [animate(400, keyframes([
        style({
          opacity: 0,
          transform: 'translateY(-100px)',
          offset: 0,
        }),
        style({
          opacity: 0.5,
          transform: 'translateY(-50px)',
          offset: 0.3,
        }),
        style({
          opacity: 1,
          transform: 'translateY(-20px)',
          offset: 0.8,
        }),
        style({
          opacity: 1,
          transform: 'translateY(0px)',
          offset: 1,
        }),
      ]))]),
    ]),
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0px)',
      })),
      transition('void => *', [animate(700, keyframes([
        style({
          opacity: 0,
          transform: 'translateY(-100px)',
          offset: 0,
        }),
        style({
          opacity: 0.5,
          transform: 'translateY(-50px)',
          offset: 0.3,
        }),
        style({
          opacity: 1,
          transform: 'translateY(-20px)',
          offset: 0.8,
        }),
        style({
          opacity: 1,
          transform: 'translateY(0px)',
          offset: 1,
        }),
      ]))]),
      transition('* => void', [
        group([
          animate(400), style({
            opacity: 0.5,
            transform: 'translateX(50px)',
          }),
          animate(500), style({
            opacity: 0,
            transform: 'translateX(100px)',
          }),
        ])],
      ),  //void
    ]),
    trigger('list3', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0px)',
      })),
      transition('void => *', [animate(1000, keyframes([
        style({
          opacity: 0,
          transform: 'translateY(-100px)',
          offset: 0,
        }),
        style({
          opacity: 0.5,
          transform: 'translateY(-50px)',
          offset: 0.3,
        }),
        style({
          opacity: 1,
          transform: 'translateY(-20px)',
          offset: 0.8,
        }),
        style({
          opacity: 1,
          transform: 'translateY(0px)',
          offset: 1,
        }),
      ]))]),
      transition('* => void', [
        group([
          animate(600), style({
            opacity: 0.5,
            transform: 'translateX(50px)',
          }),
          animate(700), style({
            opacity: 0,
            transform: 'translateX(100px)',
          }),
        ])],
      ),  //void
    ]),
  ],
})
export class FabMenuComponent {
  @Input() isDarkTheme: boolean;
  active: boolean = false;
  state: string = 'in';

  constructor() { }

  onClick() {
    this.active = !this.active;
  }

}
