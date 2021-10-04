import { LegsField, LegsMode } from "../components/game-configuration/config-fields/legs-field/legs-field.model";
import { SetsField, SetsMode } from "../components/game-configuration/config-fields/sets-field/sets-field.model";

export class GameConfig {
    pointsGameMode: number;
    setsGameMode: SetsField;
    legsGameMode: LegsField;
    players: string[];

    constructor(
        points: number = 501,
        sets: number = 0,
        legs: number = 1,
        players: string[] = []
    ) {
        this.pointsGameMode = points;
        this.setsGameMode = {mode: SetsMode.BestOf, targetNumber: sets} as SetsField;
        this.legsGameMode = {mode: LegsMode.BestOf, targetNumber: legs} as LegsField;
        this.players = players;
    }
}
