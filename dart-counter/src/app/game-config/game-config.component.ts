import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import * as gameConfigurationConsts from './models/game-configuration.models';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.css']
})
export class GameConfigComponent implements OnInit {

  public configurationForm: FormGroup = new FormGroup({});
  public points = gameConfigurationConsts.pointsMode;
  public legs = gameConfigurationConsts.legsMode;
  public sets = gameConfigurationConsts.setsMode;

  constructor(private formBuilder: FormBuilder) { }

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
    console.log('startGame clicked: ', config)
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


}
