import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as GameConfigurationConsts from './models/game-configuration.models';
import { GameConfig } from '../models/game-config.model';
import { debounceTime } from 'rxjs/operators';
import { GameConfigManagerService } from './services/game-config-manager.service';

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
    private gameConfigManagerService: GameConfigManagerService
  ) { }

  public ngOnInit(): void {
    this.configurationForm = this.createConfigurationForm();
    this.subscribeToPlayersForm();
  }

  public startGame(): void {
    this.gameConfigManagerService.setupGameConfig(this.gameConfig);
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

  private subscribeToPlayersForm(): void {
    this.configurationForm.valueChanges.pipe(debounceTime(300),).subscribe(
      gameConfigurationFormValue => { this.gameConfig = gameConfigurationFormValue as GameConfig;}
    );
  }

  public submitGameConfig(): void {
    console.log(this.configurationForm.value)
  }
}
