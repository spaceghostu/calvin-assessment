import {
    trigger,
    state,
    animate,
    style,
    transition,
  } from '@angular/animations';
  
  const DURATION = 300; // ms
  const DELAY = 0; // ms
  const EASING = 'cubic-bezier(.46, 1, .25, 1)';

  const ENTER_TIMING = `${DURATION}ms ${DELAY}ms ${EASING}`;
  const EXIT_TIMING = `${DURATION}ms ${EASING}`;

  const BASE = {
    position: 'absolute',
    width: '100vw',
  }
  
  const CENTER = {
    left: '0vw',
  };
  const LEFT = {
    left: '-100vw',
};
const RIGHT = {
    left: '100vw',
  };
  
  export const pageTransition = trigger('pageTransition', [
    state('*', style(BASE)),
    transition(':leave', [
        style(CENTER),
        animate(EXIT_TIMING, style(LEFT)),
    ]),
    transition(':enter', [
        style(RIGHT),
        animate(ENTER_TIMING, style(CENTER)),
    ]),
  ]);
  