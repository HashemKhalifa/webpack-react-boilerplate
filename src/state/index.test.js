import { generateLevel } from './index';
import { initialState } from './initial';

describe('State reducer functions:: ', () => {
  let state;
  beforeEach(() => {
    state = {...initialState};
  })
  
  describe('Generate level:', () => {
    let newState = generateLevel(state);
    it ('Returns an object', () => {
      expect(newState).toBe(true);
    })
  })
})