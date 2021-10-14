import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setPointsGameMode } from 'src/app/store/action/game-config.actions';
import { GameConfigState } from 'src/app/store/reducer/game-config.reducer';

@Component({
  selector: 'app-points-config-field',
  templateUrl: './points-config-field.component.html',
  styleUrls: ['./points-config-field.component.css']
})
export class PointsConfigFieldComponent implements OnInit {

  public pointsMode = [101, 301, 501, 701, 1001];
  public selectedPointsMode: number = 501;

  private componentTag = '[PCFC]';

  constructor(private store: Store<GameConfigState>) { }

  public ngOnInit(): void {
  }

  public onChangeEvent(): void {
    console.log(`${this.componentTag} selected points mode is ${this.selectedPointsMode}`);
    this.store.dispatch(setPointsGameMode(this.selectedPointsMode))
  }

}
