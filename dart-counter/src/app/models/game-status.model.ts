export interface Player {
    name: string;
    currentPoints: number;
    legs: number;
    sets: number;
    scoredPoints: number[];
    averagePoints1Dart: number;
    averagePoints3Darts: number;
    toThrow: boolean;
    toStart: boolean;
}

export interface GameStatusState {
    players: Player[]
}

export function createInitPlayer(name: string, points: number): Player {
    return {
        name: name,
        currentPoints: points,
        legs: 0,
        sets: 0,
        scoredPoints: [],
        averagePoints1Dart: 0,
        averagePoints3Darts: 0,
        toThrow: false,
        toStart: false
    };
}
