import { Component, OnInit } from '@angular/core';
import { GameConfigService } from 'src/app/services/game-config.service';
import { GameStatusService } from 'src/app/services/game-status.service';

@Component({
  selector: 'app-game-configuration',
  templateUrl: './game-configuration.component.html',
  styleUrls: ['./game-configuration.component.css']
})
export class GameConfigurationComponent implements OnInit {

  constructor(
    private gameConfigService: GameConfigService, 
    private gameStatusService: GameStatusService
  ) { }

  public ngOnInit(): void {
  }

  public showGameConfig(): void {
    this.gameConfigService.showGameConfig();
    this.gameStatusService.setupInitGame();
  }

}
