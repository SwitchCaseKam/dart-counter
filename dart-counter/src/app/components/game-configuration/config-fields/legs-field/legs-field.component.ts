import { Component, OnInit } from '@angular/core';
import { GameConfigService } from 'src/app/services/game-config.service';
import { LegsField, LegsMode } from './legs-field.model';

@Component({
  selector: 'app-legs-field',
  templateUrl: './legs-field.component.html',
  styleUrls: ['./legs-field.component.css']
})
export class LegsFieldComponent implements OnInit {

  public legsMode: LegsField[] = [];
  public selectedLegsMode = { mode: LegsMode.BestOf, targetNumber: 1 } as LegsField;

  constructor(private gameConfigService: GameConfigService) { }

  public ngOnInit(): void {
    this.gameConfigService.setLegsGameMode(this.selectedLegsMode);
    for (let j = 1; j <= 21; j++) { this.legsMode.push({mode: LegsMode.FirstTo, targetNumber: j}); } 
    for (let i = 1; i <= 21; i=i+2) { this.legsMode.push({mode: LegsMode.BestOf, targetNumber: i}); } 
  }

  public onChangeEvent() {
    console.log('legs onChangeEvent : ', JSON.stringify(this.selectedLegsMode));
    this.gameConfigService.setLegsGameMode(this.selectedLegsMode);
  }


}
