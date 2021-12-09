import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { Player } from 'src/app/models/game-status.model';
import { selectGameStatus, State } from 'src/app/reducers';
import * as GameStatusActions from 'src/app/store/action/game-status.actions';
import { GameStatusState } from 'src/app/store/reducer/game-status.reducer';
import { GameStatusManagerService } from '../services/game-status-manager.service';
import { DoubleOutCombinations } from './double-out-combinations';

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
  public doubleOutCombination: string | undefined = undefined;

  constructor(
    private gameStore: Store<State>,
    private gameStatusManagerService: GameStatusManagerService
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
        this.doubleOutCombination = DoubleOutCombinations.get(Number(this.points));
      });

    this.gameStatusManagerService.getPlayerNameWhoStartedSubject().subscribe(
      (playerName: string) => {
        if (playerName === this.name) {
          document.getElementById(`${this.name}-info-container`)?.focus()
        }
      }
    )
  }

  public updateCurrentPoints(scoredPoints: number): void {
    this.gameStatusManagerService.updatePlayerPoints(this.name, scoredPoints);
  }
}
