import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import * as GameConfigurationConsts from './models/game-configuration.models';
import * as GameConfigActions from 'src/app/store/action/game-config.actions';
import * as GameStatusActions from 'src/app/store/action/game-status.actions';
import { GameConfig } from '../models/game-config.model';
import { debounceTime, switchMap, tap } from 'rxjs/operators';

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
  private gameConfig: GameConfig = new GameConfig();

  constructor(
    private formBuilder: FormBuilder,
    private gameStore: Store<State>
  ) { }

  public ngOnInit(): void {
    this.configurationForm = this.createConfigurationForm();
    this.subscribeToPlayersForm();
  }

  public startGame(): void {
    this.gameStore.dispatch(GameConfigActions.startGame(this.gameConfig));
    this.gameStore.dispatch(GameStatusActions.createPlayers(this.gameConfig));
  }

  public addPlayer(): void {
    this.getPlayersFormArray().push(this.formBuilder.group({name: ''}));
  }

  public removePlayer(index: number): void {
    this.getPlayersFormArray().removeAt(index);
  }

  public getPlayersFormArray(): FormArray {
    return this.configurationForm.get('players') as FormArray;
  }

  private createConfigurationForm(): FormGroup {
    return this.formBuilder.group({
      points: [],
      legs: [],
      sets: [],
      players: this.formBuilder.array([])
    });
  }

  private subscribeToPlayersForm(): void {
    this.configurationForm.valueChanges.pipe(debounceTime(600),).subscribe(
      gameConfigurationFormValue => { this.gameConfig = gameConfigurationFormValue as GameConfig;}
    );
  }
}
