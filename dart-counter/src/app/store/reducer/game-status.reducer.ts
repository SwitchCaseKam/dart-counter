import { Action, createReducer, on } from '@ngrx/store';
import { pointsMode } from 'src/app/game-config/models/game-configuration.models';
import { GameConfigState } from 'src/app/models/game-config.model';
import { createInitPlayer, GameStatusState, Player } from 'src/app/models/game-status.model';
import * as GameStatusActions from '../action/game-status.actions';

export const gameStatusFeatureKey = 'gameStatus';
let singleGameFinishedFlag : boolean = false;

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
  on(GameStatusActions.updatePlayerPoints,
    (gameStatusState: GameStatusState, {name, points, gameConfig}) => //{
      ({...gameStatusState,
        players: updatePlayerPointsAndUpdateStore(name, points, gameStatusState.players, gameConfig.points)
      })
  ),
  on(GameStatusActions.resetPlayersPoints,
    (gameStatusState: GameStatusState, {gameConfig}) => 
    ({...gameStatusState,
      players: resetPlayersPointsAndUpdateStore(gameStatusState.players, gameConfig.points)
    })
  ),
  on(GameStatusActions.updatePlayerLegs,
    (gameStatusState: GameStatusState, {name, legs}) => 
    ({...gameStatusState,
      players: updatePlayerLegsAndUpdateStore(name, gameStatusState.players)
    })
  ),
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

function updatePlayerPointsAndUpdateStore(name: string, points: number, players: Player[], configPointsMode: number): Player[] {
  if ( points > 180 || points < 0) { return players; }
  const currentPlayerIndex = players.findIndex(p => p.name === name);
  const nextPlayerIndex = (currentPlayerIndex+1) % players.length;
  // let singleGameFinishedFlag : boolean = false;
  console.log('players = ', players)
  console.log("updatePlayerPointsAndUpdateStore called with params: ", name, points)
  const a = players.map(
      (player, i) => {
        if (i === currentPlayerIndex) {
          if (player.currentPoints === points) {
            singleGameFinishedFlag = true;
            return {
              ...player,
              currentPoints: configPointsMode,
              scoredPoints: [...player.scoredPoints, points],
              legs: player.legs + 1,
              toThrow: false
            };
          }
          const newPoints = points < player.currentPoints - 1 ? player.currentPoints - points : player.currentPoints;
          const scoredPoints = (points + 1 < player.currentPoints || points === player.currentPoints) ? points : 0;
          return {
            ...player,
            currentPoints: singleGameFinishedFlag ? configPointsMode : newPoints,
            scoredPoints: [...player.scoredPoints, scoredPoints],
            toThrow: false
          };
        } else if (i === nextPlayerIndex) {
          return {
            ...player,
            currentPoints: singleGameFinishedFlag ? configPointsMode : player.currentPoints,
            toThrow: true
          }
        } else {
          return {
            ...player,
            currentPoints: singleGameFinishedFlag ? configPointsMode : player.currentPoints
          };  
        }

      }
    );
    return a.map((p, i) => {
      const startPlayerIndex = players.findIndex(p => p.toStart);
      console.log('startPlayerIndex = ', startPlayerIndex)
      const nextStartPlayerIndex = (startPlayerIndex+1) % players.length;
      const a = {
        ...p,
        currentPoints: singleGameFinishedFlag ? configPointsMode : p.currentPoints,
        // toStart: singleGameFinishedFlag && i === nextStartPlayerIndex ? true: false
      }; 
      if (singleGameFinishedFlag && i === nextStartPlayerIndex) {
        a.toStart = true;
      } 
      singleGameFinishedFlag = false;
      return a;
    });

}

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

function resetPlayersPointsAndUpdateStore(players: Player[], points: number): Player[] {
  return players.map(
    player => {
      return {
        ...player,
        currentPoints: points
      };
    }
  );
}

function updatePlayerLegsAndUpdateStore(name: string, players: Player[]): Player[] {
  return players.map(
    player => {
      if (player.name === name) {
        return {
          ...player,
          legs: player.legs + 1
        };
      }
      return player;
    }
  );
}

function averageScoredPoints(player: Player): number {
  const sum = player.scoredPoints.reduce((a, b) => a + b, 0);
  return sum / player.scoredPoints.length;
}


export function configReducer(state: GameStatusState | undefined, action: Action): any {
  return gameStatusReducer(state, action);
}