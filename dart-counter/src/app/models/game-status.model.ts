export class Player {
    public name: string;
    public currentPoints: number;
    public legs: number;
    public sets: number;

    constructor(name: string, currentPoints: number, legs: number = 0, sets: number = 0) {
        this.name = name;
        this.currentPoints = currentPoints;
        this.legs = legs;
        this.sets = sets;
    }
}

export class GameStatus {
    players: Player[]

    constructor(ps: Player[] = []) {
        this.players = ps;
    }
}