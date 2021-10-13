import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GameConfigState } from 'src/app/store/reducer/game-config.reducer';
import { GameStatusState } from 'src/app/store/reducer/game-status.reducer';
import * as GameConfigSelectors from 'src/app/store/selector/game-config.selectors';
import * as GameStatusActions from 'src/app/store/action/game-status.actions';
import { LegsField } from './config-fields/legs-config-field/legs-config.model';
import { SetsField } from './config-fields/sets-config-field/sets-config.model';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.css']
})
export class GameConfigComponent implements OnInit {

  pointsMode: Observable<number>;
  legsField: Observable<LegsField>;
  setsField: Observable<SetsField>;
  players: Observable<string[]>;

  private playersNames: string[] = [];

  private componentTag = '[GCC]';

  constructor(
    private gameConfigStore: Store<GameConfigState>,
    private gameStatusStore: Store<GameStatusState>,
  ) {
    this.pointsMode = this.gameConfigStore.pipe(select(GameConfigSelectors.selectPointsMode));
    this.legsField = this.gameConfigStore.pipe(select(GameConfigSelectors.selectLegsMode));
    this.setsField = this.gameConfigStore.pipe(select(GameConfigSelectors.selectSetsMode));
    this.players = this.gameConfigStore.pipe(select(GameConfigSelectors.selectPlayersNames));
    this.gameConfigStore.pipe(select(GameConfigSelectors.selectPlayersNames)).subscribe(
      players => {
        this.playersNames = players;
      }
    )
  }

  public ngOnInit(): void {
  }

  public startGame(): void {
    console.log(`${this.componentTag}: game started with parameters: ${this.pointsMode}, ${this.legsField}, ${this.setsField}, ${this.players}`);
    this.gameStatusStore.dispatch(GameStatusActions.startGame(this.playersNames));
  }

}
