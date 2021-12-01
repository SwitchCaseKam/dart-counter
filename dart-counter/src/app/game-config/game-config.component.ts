import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { selectGameConfig, selectGameStatus, State } from '../reducers';
import * as GameConfigurationConsts from './models/game-configuration.models';
import * as GameConfigActions from 'src/app/store/action/game-config.actions';
import * as GameStatusActions from 'src/app/store/action/game-status.actions';
import * as GameConfigSelectors from 'src/app/store/selector/game-config.selectors';
import { GameConfig } from '../models/game-config.model';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.css']
})
export class GameConfigComponent implements OnInit {

  public configurationForm: FormGroup = new FormGroup({});
  public points = GameConfigurationConsts.pointsMode;
  public legs = GameConfigurationConsts.legsMode;
  public sets = GameConfigurationConsts.setsMode;

  constructor(
    private formBuilder: FormBuilder,
    private gameStore: Store<State>
  ) { }

  public ngOnInit(): void {
    console.log(this.legs)
    this.configurationForm = this.createConfigurationForm();
  }

  private createConfigurationForm(): FormGroup {
    return this.formBuilder.group({
      points: [],
      legs: [],
      sets: [],
      players: this.formBuilder.array([])
    });
  }

  public startGame(config: any): void {
    this.gameStore.dispatch(GameConfigActions.startGame(config as GameConfig));
    this.gameStore.dispatch(GameStatusActions.createPlayers(config as GameConfig));
  }

  public addPlayer(): void {
    this.getPlayers().push(this.formBuilder.group({
      name: '',
    }));
  }

  public removePlayer(index: number): void {
    this.getPlayers().removeAt(index);
  }

  public getPlayers(): FormArray {
    return this.configurationForm.get('players') as FormArray;
  }


  public getStore(): void {
    this.gameStore.pipe(select(selectGameConfig)).subscribe(
      (gameConfig) => {
        console.log('config from store: ', gameConfig)
      });

    this.gameStore.pipe(select(selectGameStatus)).subscribe(
      (gameStatus) => {
        console.log('status from store: ', gameStatus)
      });
  }

}
