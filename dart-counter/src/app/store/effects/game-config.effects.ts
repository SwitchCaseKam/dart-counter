import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import * as GameConfigActions from 'src/app/store/action/game-config.actions';
import * as GameStatusActions from 'src/app/store/action/game-status.actions';


@Injectable()
export class GameConfigEffects {



  constructor(private actions$: Actions) {}

}
