import { Action, createReducer, on } from '@ngrx/store';
import { Player } from 'src/app/models/player.model';
import * as GameStatusActions from '../action/game-status.actions';

export const gameStatusFeatureKey = 'gameStatus';

export interface GameStatusState {
  players: Player[]
}

export const initialState: GameStatusState = {
  players: []
};


export const gameStatusReducer = createReducer(
  initialState,
  on(GameStatusActions.startGame,
    (gameStatusState: GameStatusState, {playersNames}) =>
      ({...gameStatusState,
          players: createPlayers(playersNames)
      })
  ),
);

export function reducer(state: GameStatusState | undefined, action: Action): any {
  return gameStatusReducer(state, action);
}



function createPlayers(playersNames: string[]): Player[] {
  let players: Player[] = [];
  playersNames.forEach(playerName => players.push(new Player(playerName, 501)));
  return players;
}
