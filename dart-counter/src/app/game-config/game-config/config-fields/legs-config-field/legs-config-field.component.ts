import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setLegsGameMode } from 'src/app/store/action/game-config.actions';
import { GameConfigState } from 'src/app/store/reducer/game-config.reducer';
import { LegsField, LegsMode } from './legs-config.model';

@Component({
  selector: 'app-legs-config-field',
  templateUrl: './legs-config-field.component.html',
  styleUrls: ['./legs-config-field.component.css']
})
export class LegsConfigFieldComponent implements OnInit {

  public legsMode: LegsField[] = [];
  public selectedLegsMode = { mode: LegsMode.BestOf, targetNumber: 1 } as LegsField;

  private componentTag = '[LCFC]';

  constructor(private store: Store<GameConfigState>) { }

  public ngOnInit(): void {
    for (let j = 1; j <= 21; j++) { this.legsMode.push({mode: LegsMode.FirstTo, targetNumber: j}); } 
    for (let i = 1; i <= 21; i=i+2) { this.legsMode.push({mode: LegsMode.BestOf, targetNumber: i}); } 
  }

  public onChangeEvent(): void {
    console.log(`${this.componentTag}: selected legs mode is ${this.selectedLegsMode.mode} ${this.selectedLegsMode.targetNumber}`);
    this.store.dispatch(setLegsGameMode(this.selectedLegsMode));
  }
}
