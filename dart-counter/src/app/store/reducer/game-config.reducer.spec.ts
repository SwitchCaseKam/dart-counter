import { gameConfigReducer, initialState } from './game-config.reducer';

describe('GameConfig Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = gameConfigReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
