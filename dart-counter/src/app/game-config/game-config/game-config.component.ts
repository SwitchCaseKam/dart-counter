import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GameConfigState } from 'src/app/store/reducer/game-config.reducer';
import { selectLegsMode, selectPointsMode, selectSetsMode } from 'src/app/store/selector/game-config.selectors';
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

  constructor(private store: Store<GameConfigState>) {
    this.pointsMode = this.store.pipe(select(selectPointsMode));
    this.legsField = this.store.pipe(select(selectLegsMode));
    this.setsField = this.store.pipe(select(selectSetsMode));
  }

  public ngOnInit(): void {
  }

}
