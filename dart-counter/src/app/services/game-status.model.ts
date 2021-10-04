import { LegsField } from "../components/game-configuration/config-fields/legs-field/legs-field.model";
import { SetsField } from "../components/game-configuration/config-fields/sets-field/sets-field.model";

export interface GameStatus {
    points: number,
    legs: number,
    sets: number,
    stats: GameStats
}

export interface GameStats {
    averagePoints: number,
    dartsNumber: number
}


// export class GameStatus {
//     points: number;
//     legs: LegsField;
//     sets: SetsField;
//     stats: GameStats;

//     constructor(private gameConfigService: GameConfigService) {
//         this.points = this.gameConfigService.getGameConfig().pointsGameMode;
//         this.sets = this.gameConfigService.getGameConfig().setsGameMode;
//         this.legs = this.gameConfigService.getGameConfig().legsGameMode;
//         this.stats = {
//             averagePoints: 0,
//             dartsNumber: 0
//         }
//     }
// }

// export interface GameStats {
//     averagePoints: number,
//     dartsNumber: number
// }