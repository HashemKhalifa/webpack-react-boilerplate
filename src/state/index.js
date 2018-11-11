import initialState from './initial';

/**
 * Helper function
 */

const generateSequence = complexity => {
  const seq = [];
  for (let i = 0; i < complexity; i++) {
    seq.push(Math.floor(Math.random() * 4));
  }
  return seq;
};

export const getInitialState = () => initialState;

export const generateLevel = state => ({
  ...state,
  seq: generateSequence(state.score + 1),
  status: 'Watch',
});

export const updatePos = (state, pos) => ({
  ...state,
  pos,
});

export const setGo = state => ({
  ...state,
  pos: -1,
  status: 'Go!',
  playerPos: 0,
});

export const verify = (state, id) => {
  if (state.seq[state.playerPos] === id) {
    if (state.playerPos < state.seq.length - 1)
      return { ...state, playerPos: state.playerPos + 1 }; // Correct, advancing
    return {
      ...state,
      playerPos: -1,
      score: state.score + 1,
      pos: -1,
      status: 'Watch',
      seq: generateSequence(state.score + 2),
    }; // Next level!
  }
  // LOST
  return initialState;
};
