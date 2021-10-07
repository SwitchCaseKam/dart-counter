import { Action, createReducer, on } from '@ngrx/store';
import { LegsField, LegsMode } from 'src/app/game-config/game-config/config-fields/legs-config-field/legs-config.model';
import { SetsField, SetsMode } from 'src/app/game-config/game-config/config-fields/sets-config-field/sets-config.model';
import * as GameConfigActions from '../action/game-config.actions';

export const gameConfigFeatureKey = 'gameConfig';

export interface GameConfigState {
  points: number;
  legs: LegsField;
  sets: SetsField;
  players: string[]
}

export const initialState: GameConfigState = {
  points: 501,
  legs: { mode: LegsMode.FirstTo, targetNumber: 1 },
  sets: { mode: SetsMode.FirstTo, targetNumber: 1 },
  players: []
};


export const gameConfigReducer = createReducer(
  initialState,
  on(GameConfigActions.setPointsGameMode,
    (state: GameConfigState, {pointsMode}) => 
      ({...state,
        points: pointsMode
      })
  ),
  
);

export function reducer(state: GameConfigState | undefined, action: Action): any {
  return gameConfigReducer(state, action);
}



