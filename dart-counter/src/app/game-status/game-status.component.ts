import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { GameStatusState, Player } from '../models/game-status.model';
import { selectGameStatus, State } from '../reducers';
import { KeyboardDataUpdaterService } from './services/keyboard-data-updater.service';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.css']
})
export class GameStatusComponent implements OnInit {

  public allPlayersStatus: Player[] = [];
  public updatePoints: boolean = false;

  constructor(
    private gameStore: Store<State>,
    private keyboardDataUpdaterService: KeyboardDataUpdaterService
  ) { }

  public ngOnInit(): void {
    this.getPlayersStatus();
    this.getKeyboardUpdate();

    // setInterval(() => this.updatePoints = !this.updatePoints, 2000);
  }

  public getPlayersStatus(): void {
    this.gameStore.pipe(select(selectGameStatus)).pipe(
      map((gameStatus: GameStatusState) => gameStatus.players)
    ).subscribe(
      (players: Player[]) => {
        this.allPlayersStatus = players;
      }
    );
  }

  private getKeyboardUpdate(): void {
    // this.keyboardDataUpdaterService.getPoints().subscribe(d => this.updatePoints = d);
  }

  public passDataEvent(event: Event): void {
    console.log('pass data event = ', event);
    if (event.toString() === 'stop') {
      console.log('a')
     this.updatePoints = !this.updatePoints;
    }
     this.updatePoints = true;
  }
}
