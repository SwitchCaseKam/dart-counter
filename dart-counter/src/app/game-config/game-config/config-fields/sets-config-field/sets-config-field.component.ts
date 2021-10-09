import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSetsGameMode } from 'src/app/store/action/game-config.actions';
import { GameConfigState } from 'src/app/store/reducer/game-config.reducer';
import { SetsField, SetsMode } from './sets-config.model';

@Component({
  selector: 'app-sets-config-field',
  templateUrl: './sets-config-field.component.html',
  styleUrls: ['./sets-config-field.component.css']
})
export class SetsConfigFieldComponent implements OnInit {

  public setsMode: SetsField[] = [];
  public selectedSetsMode = { mode: SetsMode.BestOf, targetNumber: 1 } as SetsField;

  private componentTag = '[SCFC]';

  constructor(private store: Store<GameConfigState>) { }

  public ngOnInit(): void {
    for (let j = 1; j <= 21; j++) { this.setsMode.push({mode: SetsMode.FirstTo, targetNumber: j}); } 
    for (let i = 1; i <= 21; i=i+2) { this.setsMode.push({mode: SetsMode.BestOf, targetNumber: i}); } 
  }

  public onChangeEvent(): void {
    console.log(`${this.componentTag}: selected sets mode is ${this.selectedSetsMode.mode} ${this.selectedSetsMode.targetNumber}`);
    this.store.dispatch(setSetsGameMode(this.selectedSetsMode));
  }
}
