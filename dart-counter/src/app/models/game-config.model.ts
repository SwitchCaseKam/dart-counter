import { PointsMode } from "../game-config/models/game-configuration.models";

export interface Player {
    name: string;
}
  
export interface GameConfigState {
    points: number;
    legs: PointsMode;
    sets: PointsMode;
    players: Player[];
}
