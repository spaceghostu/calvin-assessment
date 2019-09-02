import {
    trigger,
    state,
    animate,
    style,
    transition,
  } from '@angular/animations';
  
  const DURATION = 300; // ms
  const EASING = 'cubic-bezier(.46, 1, .25, 1)';

//   const ENTER_EASING = 'cubic-bezier(1,0,.5,1)';
//   const EXIT_EASING = 'cubic-bezier(.5,0,.66,1)';
  
  const ENTER_TIMING = `${DURATION}ms ${EASING}`;
  const EXIT_TIMING = `${DURATION}ms ${EASING}`;
  
  const BASE = {
    position: 'relative',
  };
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
    transition('void => reverse', [
        style(LEFT),
        animate(ENTER_TIMING, style(CENTER)),
    ]),
    transition('reverse => void', [
        style(CENTER),
        animate(ENTER_TIMING, style(RIGHT)),
    ]),
    transition('void => *', [
        style(RIGHT),
        animate(ENTER_TIMING, style(CENTER)),
    ]),
    transition('* => void', [
        style(CENTER),
        animate(ENTER_TIMING, style(LEFT)),
    ]),
  ]);
  