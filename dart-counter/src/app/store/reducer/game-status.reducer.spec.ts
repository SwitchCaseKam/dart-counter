import { gameStatusReducer, initialState } from './game-status.reducer';

describe('GameStatus Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = gameStatusReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
