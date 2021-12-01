import * as fromGameConfig from './game-config.actions';

describe('loadGameConfigs', () => {
  it('should return an action', () => {
    expect(fromGameConfig.loadGameConfigs().type).toBe('[GameConfig] Load GameConfigs');
  });
});
