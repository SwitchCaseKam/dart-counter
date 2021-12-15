import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GameStatusEffects } from './game-status.effects';

describe('GameStatusEffects', () => {
  let actions$: Observable<any>;
  let effects: GameStatusEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameStatusEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(GameStatusEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
