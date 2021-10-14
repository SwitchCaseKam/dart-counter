import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { selectPlayersNames } from '../selector/game-config.selectors';



@Injectable()
export class StateEffects {


  // startGame = createEffect(() => this.actions$.pipe(
  //   ofType('[GameStatus] Start Game'),
  //   mergeMap((action) => selectPlayersNames().pipe(
  //     map(playerNames => {
  //       n
  //     })
  //   )
  //   )
  // );

  constructor(private actions$: Actions) {}

}

