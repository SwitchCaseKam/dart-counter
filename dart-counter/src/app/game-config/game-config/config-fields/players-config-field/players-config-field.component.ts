import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addPlayer, deletePlayer } from 'src/app/store/action/game-config.actions';
import { GameConfigState } from 'src/app/store/reducer/game-config.reducer';
import * as GameConfigSelectors from 'src/app/store/selector/game-config.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-players-config-field',
  templateUrl: './players-config-field.component.html',
  styleUrls: ['./players-config-field.component.css']
})
export class PlayersConfigFieldComponent implements OnInit, OnDestroy {

  public canAddAnotherPlayer = true;
  public maxPlayersNumber = 4;
  public currentPlayerName: string = '';
  public players: string[] = [];
  private playersNamesSubscription: Subscription = new Subscription();

  private componentTag = '[PlCFC]';

  constructor(private store: Store<GameConfigState>) { }

  public ngOnInit(): void {
    this.subscribeToPlayersInStore();    
  }

  public ngOnDestroy(): void {
    this.playersNamesSubscription.unsubscribe();
  }

  public addPlayer(): void {
    console.log(`${this.componentTag} added player with name ${this.currentPlayerName}`);
    this.store.dispatch(addPlayer(this.currentPlayerName));
  }

  public removePlayer(playerName: string): void {
    console.log(`${this.componentTag} deleted player with name ${playerName}`);
    this.store.dispatch(deletePlayer(playerName));
  }

  private subscribeToPlayersInStore() {
    this.playersNamesSubscription = this.store.pipe(select(GameConfigSelectors.selectPlayersNames)).subscribe(
      (playersInGame: string[]) => {
        this.canAddAnotherPlayer = playersInGame.length >= this.maxPlayersNumber ? false : true;
        this.players = playersInGame;
      });
  }
}
