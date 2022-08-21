import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { filter, map, switchMap, tap } from 'rxjs/operators';
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
export class PlayerInfoComponent implements OnInit, OnChanges {

  @Input() public playerData: Player = createInitPlayer('', 501);
  @Input() public updatePointsFlag: boolean = false;

  public scoredPoints: number = 0;
  private gameConfig: GameConfigState | undefined = undefined;


  constructor(
    private formBuilder: FormBuilder,
    private gameStore: Store<State>,
    private gameStatusManagerService: GameStatusManagerService,
    private keyboardDataUpdaterService: KeyboardDataUpdaterService
  ) { }

  public ngOnInit(): void {
    this.gameStore.pipe(
      select(selectGameConfig),
      tap(gameConfig => this.gameConfig = gameConfig),
      switchMap(() => this.gameStore.pipe(select(selectGameStatus))),
      tap(d => {
        const player = d.players!.find(p => p.name === this.playerData.name);
        if (player) { this.playerData = player;}
      }),
      switchMap(() => this.keyboardDataUpdaterService.getPoints())
    ).subscribe(
      scoredPoints => {
        this.scoredPoints = scoredPoints;
        console.log('scoredPoints in player', this.playerData.name, ' : ', scoredPoints);
        if (this.gameConfig && this.playerData.toThrow) {
          
          console.log(this.playerData.name, this.playerData.toThrow)
          this.gameStore.dispatch(GameStatusActions.updatePlayerPoints(this.playerData.name, this.scoredPoints, this.gameConfig));
          console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
        }
      }
    );

    // setInterval(() => console.log('[XX] current value input : ', this.updatePointsFlag), 1000)

    // this.keyboardDataUpdaterService.getPoints().subscribe(
    //   scoredPoints => {
    //     this.scoredPoints = scoredPoints
    //     console.log('scoredPoints in player', this.playerData.name, ' : ', scoredPoints);
    //     // if (this.keyboardDataUpdaterService.getShouldPassDataFlag()) {
    //     //   if(this.gameConfig && this.playerData.toThrow) {
    //     //     console.log('update points action will be send', this.playerData.name, scoredPoints)
    //     //     this.gameStore.dispatch(GameStatusActions.updatePlayerPoints(this.playerData.name, scoredPoints, this.gameConfig));
    //     //   }
    //     // }
    //   }
    // );
  }

  public ngOnChanges(): void {
    console.log('XXXXX: ', this.playerData.name, this.updatePointsFlag)
    // if(this.gameConfig && this.playerData.toThrow) {
    //   console.log('update points action will be send')
    //   this.gameStore.dispatch(GameStatusActions.updatePlayerPoints(this.playerData.name, this.scoredPoints, this.gameConfig));
    // }
    // // this.updateCurrentPoints();

  }

  public updateCurrentPoints(event: Event): void {
    event.preventDefault();
    console.log('ok clicked');
    if(this.gameConfig && this.playerData.toThrow) {
      console.log('update points action will be send FROM OK button')
      this.gameStore.dispatch(GameStatusActions.updatePlayerPoints(this.playerData.name, this.scoredPoints, this.gameConfig));
    }
    // this.updatePointsFlag = false
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
