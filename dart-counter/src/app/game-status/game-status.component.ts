import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { GameStatusState, Player } from '../models/game-status.model';
import { selectGameStatus, State } from '../reducers';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.css']
})
export class GameStatusComponent implements OnInit {

  public allPlayersStatus: Player[] = [];

  constructor(
    private gameStore: Store<State>
  ) { }

  public ngOnInit(): void {
    this.getPlayersStatus();
  }

  public getPlayersStatus(): void {
    this.gameStore.pipe(select(selectGameStatus)).pipe(
      map((gameStatus: GameStatusState) => gameStatus.players)
    ).subscribe(
      (players: Player[]) => this.allPlayersStatus = players
    );
  }

}
