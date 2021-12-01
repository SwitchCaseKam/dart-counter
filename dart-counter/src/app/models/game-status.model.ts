export class Player {
    name: string;
    currentPoints: number;
    legs: number;
    sets: number;

    constructor(name: string, currentPoints: number, legs: number = 0, sets: number = 0) {
        this.name = name;
        this.currentPoints = currentPoints;
        this.legs = legs;
        this.sets = sets;
    }

    public setCurrentPoints(points: number) {
        this.currentPoints = points;
    }
}

export class GameStatus {
    players: Player[]

    constructor(ps: Player[] = []) {
        this.players = ps;
    }
}