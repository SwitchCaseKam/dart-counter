import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Player } from 'src/app/models/player.model';
import { GameStatusState } from 'src/app/store/reducer/game-status.reducer';
import { selectPlayer } from 'src/app/store/selector/game-status.selectors';
import * as GameStatusActions from 'src/app/store/action/game-status.actions';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  @Input() public name: string = '';
  public points: number = 0;
  public sets: number = 0;
  public legs: number = 0;

  public scoredPoints: number = 0

  private componentTag = '[PC]';

  constructor(private store: Store<GameStatusState>) { }

  public ngOnInit(): void {
    this.store.pipe(select(selectPlayer(this.name))).subscribe(
      (playerData: Player) => {
        this.points = playerData.currentPoints;
        this.legs = playerData.legs;
        this.sets = playerData.sets;
      }
    );
  }

  public submitPoints() {
    console.log(`${this.componentTag} player ${this.name} scored ${this.scoredPoints}`);
    this.store.dispatch(GameStatusActions.submitPoints(this.name, this.scoredPoints));
  }
}
