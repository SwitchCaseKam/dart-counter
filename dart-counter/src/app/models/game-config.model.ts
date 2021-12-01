import { FinishMode, PointsMode } from "../game-config/models/game-configuration.models";

export interface Player {
    name: string;
}

export class GameConfig {
    points: number;
    legs: PointsMode;
    sets: PointsMode;
    players: Player[];

    constructor(p: number = 501, 
                l: PointsMode = {mode: FinishMode.FIRST_TO, value: 1 }, 
                s: PointsMode = {mode: FinishMode.FIRST_TO, value: 1 }, 
                ps: Player[] = []
    ) {
        this.points = p;
        this.legs = l;
        this.sets = s;
        this.players = ps;
    }
}