import { Action, createReducer, on } from '@ngrx/store';
import { FinishMode } from 'src/app/game-config/models/game-configuration.models';
import { GameConfigState } from 'src/app/models/game-config.model';
import * as GameConfigActions from '../action/game-config.actions';

export const gameConfigFeatureKey = 'gameConfig';

export const initialState: GameConfigState = {
  points: 501,
  legs:  { mode: FinishMode.FIRST_TO, value: 1 },
  sets:  { mode: FinishMode.FIRST_TO, value: 1 },
  players: []
};

export const gameConfigReducer = createReducer(
  initialState,
  on(GameConfigActions.startGame,
    (gameConfigState: GameConfigState, {gameConfig}) => 
    ({...gameConfigState,
      points: gameConfig.points,
      legs: gameConfig.legs,
      sets: gameConfig.sets,
      players: gameConfig.players,
    })
  ),
);

export function configReducer(state: GameConfigState | undefined, action: Action): any {
  return gameConfigReducer(state, action);
}