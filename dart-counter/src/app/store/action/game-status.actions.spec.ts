import * as fromGameStatus from './game-status.actions';

describe('loadGameStatuss', () => {
  it('should return an action', () => {
    expect(fromGameStatus.loadGameStatuss().type).toBe('[GameStatus] Load GameStatuss');
  });
});
