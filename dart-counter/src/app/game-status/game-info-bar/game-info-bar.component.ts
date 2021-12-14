import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameConfig } from 'src/app/models/game-config.model';
import { State, selectGameConfig } from 'src/app/reducers';

@Component({
  selector: 'app-game-info-bar',
  templateUrl: './game-info-bar.component.html',
  styleUrls: ['./game-info-bar.component.css']
})
export class GameInfoBarComponent implements OnInit, OnDestroy {

  public gameConfig: GameConfig = new GameConfig();
  private gameConfigSubscription: Subscription = new Subscription();

  constructor(
    private gameStore: Store<State>
  ) { }

  public ngOnInit(): void {
    this.subscribeToGameConfig();
  }

  public ngOnDestroy(): void {
    this.gameConfigSubscription.unsubscribe();
  }

  private subscribeToGameConfig(): void {
    this.gameConfigSubscription = this.gameStore.pipe(select(selectGameConfig)).pipe(map(gameConfig => gameConfig.data)).subscribe(
      (gameConfig: GameConfig) => this.gameConfig = gameConfig
    );
  }



}
