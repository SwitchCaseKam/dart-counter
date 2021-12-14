import { TestBed } from '@angular/core/testing';

import { GameConfigManagerService } from './game-config-manager.service';

describe('GameConfigManagerService', () => {
  let service: GameConfigManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameConfigManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
