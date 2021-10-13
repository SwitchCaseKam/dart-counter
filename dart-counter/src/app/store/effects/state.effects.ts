import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';


@Injectable()
export class StateEffects {


  // startGame = createEffect(() => this.actions$.pipe(
  //   ofType('[GameStatus] Start Game'),
  //   mergeMap(() => {
  //     console.log('EFFECT')
  //   }
  //   ).pipe(
  //     map()
  //   ))
  // );

  constructor(private actions$: Actions) {}

}

