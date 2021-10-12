import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addPlayer, deletePlayer, updatePlayers } from 'src/app/store/action/game-config.actions';
import { GameConfigState } from 'src/app/store/reducer/game-config.reducer';
import { Player } from './player.model';
import * as GameConfigActions from 'src/app/store/selector/game-config.selectors';
import { skip, take } from 'rxjs/operators';

@Component({
  selector: 'app-players-config-field',
  templateUrl: './players-config-field.component.html',
  styleUrls: ['./players-config-field.component.css']
})
export class PlayersConfigFieldComponent implements OnInit {

  public canAddAnotherPlayer = true;
  public maxPlayersNumber = 4;
  public currentPlayerName: string = '';
  public players: string[] = [];

  private componentTag = '[PlCFC]';

  constructor(private store: Store<GameConfigState>) { }

  public ngOnInit(): void {
    this.subscribeToPlayersInStore();    
  }

  public addPlayer(): void {
    console.log(`${this.componentTag}: added player with name ${this.currentPlayerName}`);
    this.store.dispatch(addPlayer(this.currentPlayerName));
  }

  public removePlayer(playerName: string): void {
    console.log(`${this.componentTag}: deleted player with name ${this.currentPlayerName}`);
    this.store.dispatch(deletePlayer(playerName));
  }

  private subscribeToPlayersInStore() {
    this.store.pipe(select(GameConfigActions.selectPlayersNames)).subscribe(
      playersInGame => {
        this.canAddAnotherPlayer = playersInGame.length >= this.maxPlayersNumber ? false : true;
        this.players = playersInGame;
      });
  }

}
