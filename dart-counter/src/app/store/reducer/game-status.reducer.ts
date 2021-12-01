import { Action, createReducer, on } from '@ngrx/store';
import { GameConfig } from 'src/app/models/game-config.model';
import { GameStatus, Player } from 'src/app/models/game-status.model';
import * as GameStatusActions from '../action/game-status.actions';

export const gameStatusFeatureKey = 'gameStatus';

export interface GameStatusState {
  data: GameStatus
}

export const initialState: GameStatusState = {
  data: new GameStatus()
};

export const gameStatusReducer = createReducer(
  initialState,
  on(GameStatusActions.createPlayers,
    (gameStatusState: GameStatusState, {gameConfig}) => 
    ({...gameStatusState,
      data: createPlayers(gameConfig)
    })
  ),
);

function createPlayers(gameConfig: GameConfig): GameStatus {
  const playersInGame: Player[] = [];
  const pointsMode = gameConfig.points;
  gameConfig.players.forEach(p => playersInGame.push(new Player(p.name, pointsMode)));
  return new GameStatus(playersInGame);
}

export function configReducer(state: GameStatusState | undefined, action: Action): any {
  return gameStatusReducer(state, action);
}