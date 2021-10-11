import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GameConfigState } from 'src/app/store/reducer/game-config.reducer';
import * as GameConfigActions from 'src/app/store/selector/game-config.selectors';
import { LegsField } from './config-fields/legs-config-field/legs-config.model';
import { Player } from './config-fields/players-config-field/player.model';
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

  constructor(private store: Store<GameConfigState>) {
    this.pointsMode = this.store.pipe(select(GameConfigActions.selectPointsMode));
    this.legsField = this.store.pipe(select(GameConfigActions.selectLegsMode));
    this.setsField = this.store.pipe(select(GameConfigActions.selectSetsMode));
    this.players = this.store.pipe(select(GameConfigActions.selectPlayersNames));
  }

  public ngOnInit(): void {
  }

}
