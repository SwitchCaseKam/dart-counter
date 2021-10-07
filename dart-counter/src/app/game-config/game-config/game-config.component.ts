import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GameConfigState } from 'src/app/store/reducer/game-config.reducer';
import { selectPointsMode } from 'src/app/store/selector/game-config.selectors';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.css']
})
export class GameConfigComponent implements OnInit {

  pointsMode: Observable<number>;

  constructor(private store: Store<GameConfigState>) {
    this.pointsMode = this.store.pipe(select(selectPointsMode))
  }

  ngOnInit(): void {
  }

}
