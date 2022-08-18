import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { FinishMode, PointsMode } from 'src/app/game-config/models/game-configuration.models';
import { GameConfigState } from 'src/app/models/game-config.model';
import { State, selectGameConfig } from 'src/app/reducers';

@Component({
  selector: 'app-game-info-bar',
  templateUrl: './game-info-bar.component.html',
  styleUrls: ['./game-info-bar.component.css']
})
export class GameInfoBarComponent implements OnInit, OnDestroy {

  public points: number = 0;
  public legs: PointsMode =  { mode: FinishMode.FIRST_TO, value: 1 };
  public sets:  PointsMode =  { mode: FinishMode.FIRST_TO, value: 1 };
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
    this.gameConfigSubscription = this.gameStore.pipe(select(selectGameConfig)).subscribe(
      (gameConfig: GameConfigState) => {
        this.points = gameConfig.points;
        this.legs = gameConfig.legs;
        this.sets = gameConfig.sets;
      }
    );
  }



}
