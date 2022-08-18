import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as GameConfigurationConsts from './models/game-configuration.models';
import { GameConfigState } from '../models/game-config.model';
import { debounceTime } from 'rxjs/operators';
import { GameConfigManagerService } from './services/game-config-manager.service';
import { State } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import * as GameConfigActions from 'src/app/store/action/game-config.actions';
import * as GameStatusActions from 'src/app/store/action/game-status.actions';


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
    this.configurationForm = this.createConfigurationForm();
  }

  public submitGameConfig(): void {
    this.gameStore.dispatch(GameConfigActions.startGame(this.configurationForm.value));
    this.gameStore.dispatch(GameStatusActions.createPlayers(this.configurationForm.value));
  }

  public addPlayer(event: Event): void {
    event.preventDefault();
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
      points: ['', Validators.required],
      legs: ['', Validators.required],
      sets: ['', Validators.required],
      players: this.formBuilder.array([], Validators.required)
    });
  }


}
