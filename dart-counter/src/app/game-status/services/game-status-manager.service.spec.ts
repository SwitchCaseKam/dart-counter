import { TestBed } from '@angular/core/testing';

import { GameStatusManagerService } from './game-status-manager.service';

describe('GameStatusManagerService', () => {
  let service: GameStatusManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameStatusManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
