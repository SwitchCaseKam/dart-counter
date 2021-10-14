import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GameConfigState } from 'src/app/store/reducer/game-config.reducer';
import * as GameStatusActions from 'src/app/store/action/game-status.actions';
import { selectGameConfig, State } from 'src/app/reducers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.css']
})
export class GameConfigComponent implements OnInit, OnDestroy {

  private gameState = {};
  private componentTag = '[GCC]';
  private gameConfigStoreSubscription: Subscription = new Subscription();

  constructor(
    private gameStore: Store<State>,
  ) {}


  public ngOnInit(): void {
    this.gameConfigStoreSubscription = this.gameStore.pipe(select(selectGameConfig)).subscribe(
      gameStore => { this.gameState = gameStore; }
    )
  }

  public ngOnDestroy(): void {
    this.gameConfigStoreSubscription.unsubscribe();
  }

  public startGame(): void {
    console.log(`${this.componentTag} game started`);
    this.gameStore.dispatch(GameStatusActions.startGame(this.gameState as GameConfigState));
  }

}
