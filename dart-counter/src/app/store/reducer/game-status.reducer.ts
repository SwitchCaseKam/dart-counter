import { Action, createReducer, on } from '@ngrx/store';
import { Player } from 'src/app/models/player.model';
import * as GameStatusActions from '../action/game-status.actions';
import { GameConfigState } from './game-config.reducer';

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
    (gameStatusState: GameStatusState, {gameConfig}) =>
      ({...gameStatusState,
          players: createPlayers(gameConfig)
      })
  ),
  // on(GameStatusActions.submitPoints,
  //   (gameStatusState: GameStatusState, {name, points}) =>
  //     ({...gameStatusState,
  //       players: gameStatusState.players.map(pl => ({
  //         ...pl,
  //         currentPoints: 501
  //       }))
  //     })
  // ),
);

export function statusReducer(state: GameStatusState | undefined, action: Action): any {
  return gameStatusReducer(state, action);
}

function createPlayers(gameConfig: GameConfigState): Player[] {
  let players: Player[] = [];
  gameConfig.players.forEach(playerName => players.push(new Player(playerName, gameConfig.points)));
  return players;
}

// function updatePoints(gameStatusState: GameStatusState, name: string, points: number): Player[] {
  
//   let players: Player[] = [];
//   players.concat(gameStatusState.players);
//   players.forEach(player => {
//     if (player.name === name) {
//       player.setCurrentPoints(player.currentPoints - points);
//     }
//   });
//   return players;
// }