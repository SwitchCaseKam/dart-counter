import { Component, OnInit } from '@angular/core';
import { GameConfigService } from 'src/app/services/game-config.service';

@Component({
  selector: 'app-game-mode-field',
  templateUrl: './game-mode-field.component.html',
  styleUrls: ['./game-mode-field.component.css']
})
export class GameModeFieldComponent implements OnInit {

  public gamePointsModes = [101, 301, 501, 701, 1001];
  public selectedGamePointsMode : number = 301;

  constructor(private gameConfigService: GameConfigService) { }

  public ngOnInit(): void {
    this.gameConfigService.setPointsGameMode(this.selectedGamePointsMode);
  }

  public onChangeEvent(): void {
    this.gameConfigService.setPointsGameMode(this.selectedGamePointsMode);
  }

}
