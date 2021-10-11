import { Action, createReducer, on } from '@ngrx/store';
import { LegsField, LegsMode } from 'src/app/game-config/game-config/config-fields/legs-config-field/legs-config.model';
import { Player } from 'src/app/game-config/game-config/config-fields/players-config-field/player.model';
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
  players: ['Player 1']
};


export const gameConfigReducer = createReducer(
  initialState,
  on(GameConfigActions.setPointsGameMode,
    (gameConfigState: GameConfigState, {pointsMode}) => 
      ({...gameConfigState,
        points: pointsMode
      })
  ),
  on(GameConfigActions.setLegsGameMode, 
    (gameConfigState: GameConfigState, {legsMode}) =>
      ({...gameConfigState,
        legs: legsMode
      })
  ),
  on(GameConfigActions.setSetsGameMode, 
    (gameConfigState: GameConfigState, {setsMode}) =>
      ({...gameConfigState,
        sets: setsMode
      })
  ),
  on(GameConfigActions.addPlayer, 
    (gameConfigState: GameConfigState, {playerName}) =>
      ({...gameConfigState,
        players: [...gameConfigState.players, playerName]
      })
  ),
  // on(GameConfigActions.addPlayer, 
  //   (gameConfigState: GameConfigState, {playerName}) =>
  //     ({...gameConfigState,
  //       players: [...gameConfigState.players, new Player(playerName, gameConfigState.points, 0, 0)]
  //     })
  // ),
  // on(GameConfigActions.updatePlayers, 
  //   (gameConfigState: GameConfigState, {players}) =>
  //     ({...gameConfigState,
  //       players: players
  //     })
  // )
);

export function reducer(state: GameConfigState | undefined, action: Action): any {
  return gameConfigReducer(state, action);
}



