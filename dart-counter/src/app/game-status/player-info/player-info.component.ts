import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { filter, map, switchMap } from 'rxjs/operators';
import { GameConfigState } from 'src/app/models/game-config.model';
import { createInitPlayer, GameStatusState, Player } from 'src/app/models/game-status.model';
import { selectGameConfig, selectGameStatus, State } from 'src/app/reducers';
import * as GameStatusActions from 'src/app/store/action/game-status.actions';
// import { GameStatusState } from 'src/app/store/reducer/game-status.reducer';
import { GameStatusManagerService } from '../services/game-status-manager.service';
import { KeyboardDataUpdaterService } from '../services/keyboard-data-updater.service';
import { DoubleOutCombinations } from './double-out-combinations';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  @Input() public playerData: Player = createInitPlayer('', 501);

  public scoredPoints: number = 0;
  private gameConfig: GameConfigState | undefined = undefined;


  constructor(
    private formBuilder: FormBuilder,
    private gameStore: Store<State>,
    private gameStatusManagerService: GameStatusManagerService,
    private keyboardDataUpdaterService: KeyboardDataUpdaterService
  ) { }

  public ngOnInit(): void {
    // setTimeout(() => console.log(this.playerData), 1000)
    // this.playerPointsForm = this.createPlayerPointsForm();
    this.gameStore.pipe(
      select(selectGameConfig),
    ).subscribe(
      gameConfig => this.gameConfig = gameConfig
    );

    this.gameStore.pipe(select(selectGameStatus)).pipe(
      map((gameStatus: GameStatusState) => gameStatus.players),
    ).subscribe(
      (players: Player[]) => {
        if (players.some(p => p.currentPoints === 0)) {
          if (this.gameConfig) {
            this.gameStore.dispatch(GameStatusActions.resetPlayersPoints(this.gameConfig));
          }
        }
    });

  //   this.gameStatusManagerService.getPlayerNameWhoStartedSubject().subscribe(
  //     (playerName: string) => {
  //       if (playerName === this.name) {
  //         console.log('playerName: ', playerName)
  //         document.getElementById(`${this.name}-info-container`)?.focus()
  //         this.wasStarted = true;
  //       } else {
  //         this.wasStarted = false;
  //       }
  //     }
  //   )

  //   this.gameStatusManagerService.getCurrentPlayerNameSubject().subscribe(
  //     (playerName: string) => this.isTurn = playerName === this.name ?  true : false
  //   );

    this.keyboardDataUpdaterService.getPoints().subscribe(scoredPoints => this.scoredPoints = scoredPoints)
  }

  public updateCurrentPoints(): void {
    console.log('ok clicked')
    if(this.gameConfig) {

      this.gameStore.dispatch(GameStatusActions.updatePlayerPoints(this.playerData.name, this.scoredPoints, this.gameConfig));
    }
  }

  // private createPlayerPointsForm(): FormGroup {
  //   return this.formBuilder.group({
  //     points: ['', {
  //       validators: [this.validatePoints()],
  //       updateOn: 'change'
  //     }]
  //   });
  // }

  // private validatePoints(): ValidatorFn {
  //   return (control: AbstractControl) => {
  //     if(control.value?.toString().toLowerCase().includes('.')) {
  //       control.setErrors({invalidNumber: true});
  //       return {invalidNumber: true};
  //     } else if(control.value > 180 || control.value < 0) {
  //       control.setErrors({wrongNumber: true});
  //       return {wrongNumber: true};
  //     } else {
  //       return null;
  //     }
  //   }
  // }
}
