import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GameConfig } from 'src/app/services/game-config.model';
import { GameConfigService } from 'src/app/services/game-config.service';
import { GameStatusService } from 'src/app/services/game-status.service';

@Component({
  selector: 'app-players-game-info',
  templateUrl: './players-game-info.component.html',
  styleUrls: ['./players-game-info.component.css']
})
export class PlayersGameInfoComponent implements OnInit {

  public playerNames: string[] = [];
  public gameConfig : GameConfig = new GameConfig();
  public form: FormGroup = new FormGroup({});
  
  constructor(
    private gameConfigService: GameConfigService,
    private gameStatusService: GameStatusService
  ) { }

  public ngOnInit(): void {
    this.gameConfig = this.gameConfigService.getGameConfig();
  }

  public disableSomething(): void {
    console.log('clicked')
  }

  

  
}
