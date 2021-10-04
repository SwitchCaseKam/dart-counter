import { Component, OnInit } from '@angular/core';
import { GameConfigService } from 'src/app/services/game-config.service';

@Component({
  selector: 'app-players-field',
  templateUrl: './players-field.component.html',
  styleUrls: ['./players-field.component.css']
})
export class PlayersFieldComponent implements OnInit {

  public players = ['Player 1'];
  public maxPlayersNumber = 4;
  
  constructor(private gameConfigService: GameConfigService) { }

  public ngOnInit(): void {
    this.gameConfigService.setPlayers(this.players);
  }

  public addPlayer(): void {
    this.players.push(' ');
    console.log('Current players : ', this.players);
    this.gameConfigService.setPlayers(this.players);
  }

  public removePlayer(index: number): void {
    this.players.splice(index ,1);
    console.log('Current players : ', this.players);
    this.gameConfigService.setPlayers(this.players);
  }

  public indexTracker(index: number, value: any) {
    return index;
  }

}
