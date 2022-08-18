import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameConfigState } from 'src/app/models/game-config.model';
import { State } from 'src/app/reducers';
import * as GameConfigActions from 'src/app/store/action/game-config.actions';
import * as GameStatusActions from 'src/app/store/action/game-status.actions';

@Injectable({
  providedIn: 'root'
})
export class GameConfigManagerService {

  constructor(private gameStore: Store<State>) { }

  public setupGameConfig(gameConfig: GameConfigState): void {
    this.gameStore.dispatch(GameConfigActions.startGame(gameConfig));
    this.gameStore.dispatch(GameStatusActions.createPlayers(gameConfig));
  }
}
