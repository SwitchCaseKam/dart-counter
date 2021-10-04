import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameConfigService } from './game-config.service';
import { GameStatus } from './game-status.model';
import { cloneDeep } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GameStatusService {

  private playerNames : string[] = [];
  private playersCounter = 0;
  private currentPlayerPointerIndex = 0;

  private playersPointsMap: Map<string, GameStatus> = new Map();
  private playersPointsMapBehaviorSubject = new BehaviorSubject(this.playersPointsMap);

  private currentPlayerName: string = '';
  private currentPlayerNameSubject = new BehaviorSubject<string>(this.currentPlayerName);

  private playerWhoStartedGame: string = '';
  private playerWhoStartedGameSubject = new BehaviorSubject(this.playerWhoStartedGame);

  constructor(
    private gameConfigService: GameConfigService
  ) { }

  public setupInitGame(): void {
    this.playerNames = this.gameConfigService.getPlayersGameMode();
    this.currentPlayerName = this.playerNames[0];
    this.setPlayerWhoStartedGame(this.currentPlayerName);
    
    this.playerNames.forEach(player => {
      this.playersPointsMap.set(player, 
        { 
          points: this.gameConfigService.getPointsGameMode(),
          legs: 0,
          sets: 0,
          stats: {
            averagePoints: 0,
            dartsNumber: 0
          }
        });
    });
    this.playersPointsMapBehaviorSubject.next(this.playersPointsMap);
    console.log('Init state: ', this.playersPointsMap);
    this.setCurrentPlayer(this.currentPlayerName);
  }


  public moveCurrentPlayerPointerIndex(): void {
    this.playersCounter += 1;
    this.currentPlayerPointerIndex = this.playersCounter % this.playerNames.length;
    this.currentPlayerName = this.playerNames[this.currentPlayerPointerIndex];
    console.log('[DEBUG] current player : ', this.currentPlayerName);
    this.setCurrentPlayer(this.currentPlayerName);
  }

  public getPlayersPointsMap(): Map<string, GameStatus> {
    return this.playersPointsMap;
  }

  public getPlayersPointsMapBehaviorSubject(): Observable<Map<string, GameStatus>> {
    return this.playersPointsMapBehaviorSubject;
  }

  public submitPoints(playerName: string, scoredPoints: number): void {
    const currentPoints = this.playersPointsMap.get(playerName)?.points;
    const currentStatus = this.playersPointsMap.get(playerName)
    if (currentStatus && currentStatus.points) {
      const newPoints = currentStatus?.points - scoredPoints;
      if (newPoints === 1 || newPoints < 0 ) { return; }
      currentStatus.points = newPoints;
      this.playersPointsMap.set(playerName, currentStatus);
      if (newPoints === 0) {
        this.playerNames.forEach(player => {
          console.log('[DEBUG] playerName : ', player)
          if (this.currentPlayerName === player) {
            let legs = this.playersPointsMap.get(player)?.legs;
            if (legs !== undefined) { legs += 1; } else { legs = 0; }
            this.playersPointsMap.set(player, 
              { 
                points: this.gameConfigService.getPointsGameMode(),
                legs: legs,
                sets: 0,
                stats: {
                  averagePoints: 0,
                  dartsNumber: 0
                }
              });
              
            const playerIndex = this.playerNames.indexOf(this.playerWhoStartedGame);
            const nextPlayerWhoStarted = this.playerNames[playerIndex%this.playerNames.length + 1]
            this.playerWhoStartedGame = nextPlayerWhoStarted;
            this.playerWhoStartedGameSubject.next(this.playerWhoStartedGame);
          } else {
            const playerGameStatus = cloneDeep(this.playersPointsMap.get(player));
            if (playerGameStatus) {
              playerGameStatus.points = this.gameConfigService.getPointsGameMode();
              this.playersPointsMap.set(player, playerGameStatus);
            }
          }
        });

        // const playerIndex = this.playerNames.indexOf(this.playerWhoStartedGame);
        // const nextPlayerWhoStarted = this.playerNames[playerIndex%this.playerNames.length + 1]
        // this.playerWhoStartedGame = nextPlayerWhoStarted;
        // this.playerWhoStartedGameSubject.next(this.playerWhoStartedGame);
      }
    }
    this.playersPointsMapBehaviorSubject.next(this.playersPointsMap);
  }

  public getPlayerPoints(playerName: string): number {
    const points = this.playersPointsMap.get(playerName)?.points;
    if (points) { 
      return points; 
    } else { 
      return this.gameConfigService.getPointsGameMode(); 
    } 
  }

  public setCurrentPlayer(playerName: string): void {
    this.currentPlayerName = playerName;
    this.currentPlayerNameSubject.next(playerName);
  }

  public getCurrentPlayerName(): Observable<string> {
    return this.currentPlayerNameSubject;
  }

  private setPlayerWhoStartedGame(playerName: string): void {
    this.playerWhoStartedGame = playerName;
    this.playerWhoStartedGameSubject.next(playerName);
  }

  public getPlayerWhoStartedGame(): Observable<string> {
    return this.playerWhoStartedGameSubject;
  }

  public getPlayerLegs(playerName: string): number {
    const legs = this.playersPointsMap.get(playerName)?.legs;
    const legsConfig = this.gameConfigService.getLegsGameMode()?.targetNumber
    return legs || legs === 0 ? legs : legsConfig;
  }

  public getPlayerSets(playerName: string): number {
    const sets = this.playersPointsMap.get(playerName)?.sets;
    const setsConfig = this.gameConfigService.getSetsGameMode()?.targetNumber
    return sets || sets === 0 ? sets : setsConfig;
  }

  public updatePlayerStatus(playerName: string): void {
    const playerGameStatus = cloneDeep(this.playersPointsMap.get(playerName));
    console.log('[DEBUG] playerGameStatus : ', playerGameStatus)
    if (playerGameStatus) {
      console.log('XXXXXXXXXX')
      playerGameStatus.points = this.gameConfigService.getPointsGameMode();
      this.playersPointsMap.set(playerName, playerGameStatus);
      this.playersPointsMapBehaviorSubject.next(this.playersPointsMap);
    }
    



  }
}
