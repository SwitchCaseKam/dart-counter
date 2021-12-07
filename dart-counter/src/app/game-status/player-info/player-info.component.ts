import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { Player } from 'src/app/models/game-status.model';
import { selectGameStatus, State } from 'src/app/reducers';
import * as GameStatusActions from 'src/app/store/action/game-status.actions';
import { GameStatusState } from 'src/app/store/reducer/game-status.reducer';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  @Input() public name: string = '';
  @Input() public points: string | undefined = '';
  @Input() public sets: string | undefined= '';
  @Input() public legs: string | undefined = '';

  constructor(
    private gameStore: Store<State>
  ) { }

  public ngOnInit(): void {
    this.gameStore.pipe(select(selectGameStatus)).pipe(
      map((gameStatus: GameStatusState) => gameStatus.data.players),
    ).subscribe(
      (players: Player[]) => {
        console.log('players: ', players)
        const player = players.find(p => p.name === this.name);
        this.points = player?.currentPoints.toString();
        this.legs = player?.legs.toString();;
        this.sets = player?.sets.toString();;
      });
  }

  public updateCurrentPoints(scoredPoints: number): void {
    // this.points = (Number(this.points) - scoredPoints).toString();
    this.gameStore.dispatch(GameStatusActions.updatePlayerPoints(this.name, Number(this.points) - scoredPoints));

  }
}
