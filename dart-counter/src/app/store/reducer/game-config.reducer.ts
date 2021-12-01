import { Action, createReducer, on } from '@ngrx/store';
import { GameConfig } from 'src/app/models/game-config.model';
import * as GameConfigActions from '../action/game-config.actions';

export const gameConfigFeatureKey = 'gameConfig';

export interface GameConfigState {
  data: GameConfig
}

export const initialState: GameConfigState = {
  data: new GameConfig()
};

export const gameConfigReducer = createReducer(
  initialState,
  on(GameConfigActions.startGame,
    (gameConfigState: GameConfigState, {gameConfig}) => 
    ({...gameConfigState,
      data: gameConfig
    })
  ),
);

export function configReducer(state: GameConfigState | undefined, action: Action): any {
  return gameConfigReducer(state, action);
}