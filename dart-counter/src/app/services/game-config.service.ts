import { Injectable } from '@angular/core';
import { LegsField, LegsMode } from '../components/game-configuration/config-fields/legs-field/legs-field.model';
import { SetsField, SetsMode } from '../components/game-configuration/config-fields/sets-field/sets-field.model';
import { GameConfig } from './game-config.model';

@Injectable({
  providedIn: 'root'
})
export class GameConfigService {

  private gameConfig: GameConfig = new GameConfig();

  constructor() { }

  public setPointsGameMode(points: number): void {
    this.gameConfig.pointsGameMode = points;
  }

  public setSetsGameMode(sets: SetsField): void {
    this.gameConfig.setsGameMode = sets;
  }

  public setLegsGameMode(legs: LegsField): void {
    this.gameConfig.legsGameMode = legs;
  }

  public setPlayers(players: string[]): void {
    this.gameConfig.players = players;
  }

  public getPointsGameMode(): number {
    return this.gameConfig.pointsGameMode;
  }

  public getSetsGameMode(): SetsField {
    return this.gameConfig.setsGameMode;
  }

  public getLegsGameMode(): LegsField {
    return this.gameConfig.legsGameMode;
  }

  public getPlayersGameMode(): string[] {
    return this.gameConfig.players;
  }

  public getGameConfig(): GameConfig {
    return this.gameConfig;
  }

  public showGameConfig(): void {
    console.log('[GC] game config: ', this.gameConfig);
  }
  
}
