import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { GameConfig } from 'src/app/models/game-config.model';
import { GameStatus } from 'src/app/models/game-status.model';
import { selectGameConfig, selectGameStatus, State } from 'src/app/reducers';
import { GameConfigState } from 'src/app/store/reducer/game-config.reducer';
import { GameStatusState } from 'src/app/store/reducer/game-status.reducer';
import * as GameStatusActions from 'src/app/store/action/game-status.actions';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameStatusManagerService {

  private gameConfig: GameConfig = new GameConfig();
  private gameStatus: GameStatus = new GameStatus();

  private playerNameWhoStartedSubject = new Subject<string>();

  constructor(
    private gameStore: Store<State>
  ) { 
    this.gameStore.pipe(select(selectGameStatus)).subscribe(
      (gameStatus: GameStatusState) => {
        this.gameStatus = gameStatus.data
        this.playerNameWhoStartedSubject.next(this.gameStatus.players[0].name);
      });
    this.gameStore.pipe(select(selectGameConfig)).subscribe(
      (gameConfig: GameConfigState) => this.gameConfig = gameConfig.data);
  }

  public updatePlayerPoints(playerName: string, scoredPoints: number): void {
    if (!Number.isInteger(scoredPoints) || scoredPoints > 180) { return; }
    const currentPlayer = this.gameStatus.players.find(pl => pl.name === playerName);
    const currentPlayerIndex = currentPlayer ? this.gameStatus.players.indexOf(currentPlayer) : 0; 
    this.gameStore.dispatch(GameStatusActions.updatePlayerPoints(playerName, scoredPoints));
    if (currentPlayer && (currentPlayer.currentPoints - scoredPoints === 0)) {
      this.gameStore.dispatch(GameStatusActions.updatePlayerLegs(playerName, 1));
      this.gameStore.dispatch(GameStatusActions.resetPlayersPoints(this.gameConfig));
      this.playerNameWhoStartedSubject.next(
        this.gameStatus.players[(currentPlayerIndex+1)%this.gameStatus.players.length].name)
    }
    this.gameStore.dispatch(GameStatusActions.calculatePlayerAveragePoints(playerName));
  }

  public getPlayerNameWhoStartedSubject(): Observable<string> {
    return this.playerNameWhoStartedSubject.asObservable();
  }
}
