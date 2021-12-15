import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GameConfigEffects } from './game-config.effects';

describe('GameConfigEffects', () => {
  let actions$: Observable<any>;
  let effects: GameConfigEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameConfigEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(GameConfigEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
