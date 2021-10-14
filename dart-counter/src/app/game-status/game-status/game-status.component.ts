import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/models/player.model';
import { selectGameStatus, State } from 'src/app/reducers';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.css']
})
export class GameStatusComponent implements OnInit, OnDestroy {

  public players: Player[] = [];
  private gameStatusSubscription: Subscription = new Subscription();

  private componentTag = '[GSC]';
  
  constructor(private store: Store<State>) { }

  public ngOnInit(): void {
    this.gameStatusSubscription = this.store.pipe(select(selectGameStatus)).subscribe(
      gameStatus => {
        console.log(`${this.componentTag} game started with parameters: ${JSON.stringify(gameStatus.players)} points`);
        this.players = gameStatus.players;
      }
    );
  }

  public ngOnDestroy(): void {
    this.gameStatusSubscription.unsubscribe();
  }

}
