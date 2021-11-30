export const pointsMode = ['101', '301', '501', '701', '1001'];

const enum FinishMode {
    FIRST_TO = 'first to',
    BEST_OF = 'best of',
}

export interface PointsMode {
    mode: FinishMode,
    value: number
}

export const legsMode = Array.from({length: 21}, (_, i) => { return {mode: FinishMode.FIRST_TO, value: i+1 }}).concat(
    Array.from({length: 21}, (_, i) => i + 1).filter(i => i % 2 !== 0).map(i => { return {mode: FinishMode.BEST_OF, value: i }})
);

export const setsMode = Array.from({length: 21}, (_, i) => { return {mode: FinishMode.FIRST_TO, value: i+1 }}).concat(
    Array.from({length: 21}, (_, i) => i + 1).filter(i => i % 2 !== 0).map(i => { return {mode: FinishMode.BEST_OF, value: i }})
);
