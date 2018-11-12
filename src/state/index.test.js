import { generateLevel } from './index';
import { initialState } from './initial';

describe('State reducer functions:: ', () => {
  let state;
  beforeEach(() => {
    state = {...initialState};
  })
  
  describe('Generate level:', () => {
    state.score = 5;
    let newState = generateLevel(state);
    it ('Returns an object', () => {
      expect(newState).toBe(true);
    });
    it ('Generates array of given complexity', () => {
      expect(newState.seq.length).toBe(5);
    });
    it ('Sets correct status', () => {
      expect(newState.status).toBe('Watch');
    });
  });
})