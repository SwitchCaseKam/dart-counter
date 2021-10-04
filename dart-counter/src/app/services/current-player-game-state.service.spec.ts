import { TestBed } from '@angular/core/testing';

import { CurrentPlayerGameStateService } from './current-player-game-state.service';

describe('CurrentPlayerGameStateService', () => {
  let service: CurrentPlayerGameStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentPlayerGameStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
