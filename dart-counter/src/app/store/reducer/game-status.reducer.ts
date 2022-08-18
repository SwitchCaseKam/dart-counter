import { Action, createReducer, on } from '@ngrx/store';
import { pointsMode } from 'src/app/game-config/models/game-configuration.models';
import { GameConfigState } from 'src/app/models/game-config.model';
import { createInitPlayer, GameStatusState, Player } from 'src/app/models/game-status.model';
import * as GameStatusActions from '../action/game-status.actions';

export const gameStatusFeatureKey = 'gameStatus';

export const initialState: GameStatusState = {
  players: []
};

export const gameStatusReducer = createReducer(
  initialState,
  on(GameStatusActions.createPlayers,
    (gameStatusState: GameStatusState, {gameConfig}) => 
    ({...gameStatusState,
      players: createPlayers(gameConfig)
    })
  ),
  // on(GameStatusActions.updatePlayerPoints,
  //   (gameStatusState: GameStatusState, {name, points}) => 
  //   ({...gameStatusState,
  //     data: updatePlayerPointsAndUpdateStore(name, points, gameStatusState)
  //   })
  // ),
  // on(GameStatusActions.resetPlayersPoints,
  //   (gameStatusState: GameStatusState, {gameConfig}) => 
  //   ({...gameStatusState,
  //     data: resetPlayersPointsAndUpdateStore(gameStatusState, gameConfig)
  //   })
  // ),
  // on(GameStatusActions.updatePlayerLegs,
  //   (gameStatusState: GameStatusState, {name, legs}) => 
  //   ({...gameStatusState,
  //     data: updatePlayerLegsAndUpdateStore(name, legs, gameStatusState)
  //   })
  // ),
  // on(GameStatusActions.calculatePlayerAveragePoints,
  //   (gameStatusState: GameStatusState, {name}) => 
  //   ({...gameStatusState,
  //     data: calculateAveragePointsForPlayerAndUpdateStore(name, gameStatusState)
  //   })
  // )
);

function createPlayers(gameConfig: GameConfigState): Player[] {
  const playersInGame: Player[] = [];
  gameConfig.players.forEach((p) => playersInGame.push(
    createInitPlayer(p.name, gameConfig.points))
  );
  playersInGame[0].toStart = true;
  playersInGame[0].toThrow = true;
  return playersInGame;
}

// function updatePlayerPointsAndUpdateStore(name: string, points: number, gameStatusState: GameStatusState): GameStatus {
//   return new GameStatus(
//     gameStatusState?.data?.players.map(
//       player => {
//         if (player.name === name) {
//           const newPoints = points < player.currentPoints - 1 ? player.currentPoints - points : player.currentPoints;
//           const scoredPoints = (points + 1 < player.currentPoints || points === player.currentPoints) ? points : 0;
//           return {
//             ...player,
//             currentPoints: newPoints,
//             scoredPoints: [...player.scoredPoints, scoredPoints],
//           };
//         }
//         return player;
//       }
//     )
//   );
// }

// function calculateAveragePointsForPlayerAndUpdateStore(name: string, gameStatusState: GameStatusState): GameStatus {
//   return new GameStatus(
//     gameStatusState?.data?.players.map(
//       player => {
//         if (player.name === name) {
//           return {
//             ...player,
//             averagePoints3Darts: averageScoredPoints(player),
//           };
//         }
//         return player;
//       }
//     )
//   );
// }

// function resetPlayersPointsAndUpdateStore(gameStatusState: GameStatusState, gameConfig: GameConfig): GameStatus {
//   return new GameStatus(
//     gameStatusState?.data?.players.map(
//       player => {
//         return {
//           ...player,
//           currentPoints: gameConfig.points
//         };
//       }
//     )
//   );
// }

// function updatePlayerLegsAndUpdateStore(name: string, legs: number, gameStatusState: GameStatusState): GameStatus {
//   return new GameStatus(
//     gameStatusState?.data?.players.map(
//       player => {
//         if (player.name === name) {
//           return {
//             ...player,
//             legs: player.legs + legs
//           };
//         }
//         return player;
//       }
//     )
//   );
// }

function averageScoredPoints(player: Player): number {
  const sum = player.scoredPoints.reduce((a, b) => a + b, 0);
  return sum / player.scoredPoints.length;
}


export function configReducer(state: GameStatusState | undefined, action: Action): any {
  return gameStatusReducer(state, action);
}