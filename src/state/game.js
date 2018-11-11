import { updatePos, setGo, verify, generateLevel } from './index';

export const startGame = state => generateLevel(state);

export const showSequence = (state, cb) => {
  let pos = state.pos;
  const interval = setInterval(() => {
    pos = pos+1;
    // Trick to make buttons blink, we only blink every even tick
    const realPos = pos % 2 ? -1 : Math.ceil(pos / 2);
    console.log('realPos:', realPos);
    if (realPos < state.seq.length) {
      cb(updatePos(state, realPos));
    }
    else {
      //Player's choice
      cb(setGo(state));
      clearInterval(interval);
    }
  }, 700);
}

export const guess = (state, id) => verify(state, id);