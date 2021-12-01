import { PointsMode } from "../game-config/models/game-configuration.models";

export class GameConfig {
    points: number;
    legs: PointsMode;
    sets: PointsMode;
    players: string[];

    constructor(p: number, l: PointsMode, s: PointsMode, ps: string[]) {
        this.points = p;
        this.legs = l;
        this.sets = s;
        this.players = ps;
    }
}