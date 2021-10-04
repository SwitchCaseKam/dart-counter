import { Component, OnInit } from '@angular/core';
import { GameConfigService } from 'src/app/services/game-config.service';
import { SetsField, SetsMode } from './sets-field.model';

@Component({
  selector: 'app-sets-field',
  templateUrl: './sets-field.component.html',
  styleUrls: ['./sets-field.component.css']
})
export class SetsFieldComponent implements OnInit {

  public setsMode: SetsField[] = [];
  public selectedSetsMode = {mode: SetsMode.BestOf, targetNumber: 1} as SetsField; 

  constructor(private gameConfigService: GameConfigService) { }

  public ngOnInit(): void {
    this.gameConfigService.setSetsGameMode(this.selectedSetsMode);
    for (let j = 1; j <= 21; j++) { this.setsMode.push({mode: SetsMode.FirstTo, targetNumber: j}); } 
    for (let i = 1; i <= 21; i=i+2) { this.setsMode.push({mode: SetsMode.BestOf, targetNumber: i}); } 
    console.log(this.setsMode)
  }

  public onChangeEvent() {
    this.gameConfigService.setSetsGameMode(this.selectedSetsMode);
    console.log('SETS : ', this.gameConfigService.getSetsGameMode())
  }

}
