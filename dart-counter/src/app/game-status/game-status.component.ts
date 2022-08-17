import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Player } from '../models/game-status.model';
import { selectGameStatus, State } from '../reducers';
import { GameStatusState } from '../store/reducer/game-status.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.css']
})
export class GameStatusComponent implements OnInit {

  public playersStatus: Player[] = [];

  constructor(
    private gameStore: Store<State>
  ) { }

  public ngOnInit(): void {
    this.getPlayersStatus();
  }

  public getPlayersStatus(): void {
    this.gameStore.pipe(select(selectGameStatus)).pipe(
      map((gameStatus: GameStatusState) => gameStatus.data.players)
    ).subscribe(
      (players: Player[]) => {
        this.playersStatus = players;
      });
  }

}
