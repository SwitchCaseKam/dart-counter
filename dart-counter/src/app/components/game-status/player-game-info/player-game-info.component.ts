import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { GameStatusService } from 'src/app/services/game-status.service';
import { DoubleOutCombinations } from 'src/app/utils/double-out-combinations';

@Component({
  selector: 'app-player-game-info',
  templateUrl: './player-game-info.component.html',
  styleUrls: ['./player-game-info.component.css']
})
export class PlayerGameInfoComponent implements OnInit, OnDestroy {

  @Input()
  public playerName: string = '';

  public playerPoints: number = 0;
  public playerLegs: number = 0;
  public playerSets: number = 0;
  
  public currentScoredPoints: number = 0;
  public doesInputShouldBeDispalyed = false;
  public didPlayerStartedGame = false;
  public playerNameSubscription: Subscription = new Subscription();
  public doubleOutCombinations = '';

  constructor(
    private gameStatusService: GameStatusService
  ) { }

  public ngOnInit(): void {
    this.playerPoints = this.gameStatusService.getPlayerPoints(this.playerName);
    this.gameStatusService.getPlayersPointsMapBehaviorSubject().subscribe(
      playersMap => {
        const pl = playersMap.get(this.playerName);
        this.playerSets = pl ? pl?.sets : 0;
        this.playerLegs = pl ? pl?.legs : 0;
        this.playerPoints = pl ? pl.points : 0;
      }
    )
    this.initializeSubscriptions();
  }

  public ngOnDestroy(): void {
    this.playerNameSubscription.unsubscribe();
  }

  public submitPoints(): void {
    if (this.currentScoredPoints >= 0 && this.currentScoredPoints <= 180) {
      this.gameStatusService.submitPoints(this.playerName, this.currentScoredPoints);
      this.playerPoints = this.gameStatusService.getPlayerPoints(this.playerName);
      this.gameStatusService.moveCurrentPlayerPointerIndex();
    }
  }

  public getDoubleOutPoints(points: number): string {
    const doubleOutComb =  DoubleOutCombinations.get(points);
    return doubleOutComb ? doubleOutComb : '';
  }

  private initializeSubscriptions() {
    this.playerNameSubscription = this.gameStatusService.getCurrentPlayerName().subscribe(
      (curentPlaterName: string) => {
        this.doesInputShouldBeDispalyed = curentPlaterName === this.playerName ? true : false;
        this.doubleOutCombinations = this.getDoubleOutPoints(this.playerPoints);
      }
    );
    this.gameStatusService.getPlayerWhoStartedGame().subscribe(
      (playerWhoStartedGame: string) => {
        this.didPlayerStartedGame = playerWhoStartedGame === this.playerName ? true : false;
      }
    );
  }
}


