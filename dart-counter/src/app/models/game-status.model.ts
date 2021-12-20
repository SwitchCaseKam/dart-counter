export class Player {
    public name: string;
    public currentPoints: number;
    public legs: number;
    public sets: number;
    public scoredPoints: number[];
    public averagePoints1Dart: number = 0;
    public averagePoints3Darts: number = 0;

    constructor(name: string, currentPoints: number, legs: number = 0, sets: number = 0, scoredPoints: number[] = []) {
        this.name = name;
        this.currentPoints = currentPoints;
        this.legs = legs;
        this.sets = sets;
        this.scoredPoints = scoredPoints;
    }
}

export class GameStatus {
    players: Player[]

    constructor(ps: Player[] = []) {
        this.players = ps;
    }
}