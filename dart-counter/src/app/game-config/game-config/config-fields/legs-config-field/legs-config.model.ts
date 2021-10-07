export interface LegsField {
    mode: LegsMode,
    targetNumber: number
}

export enum LegsMode {
    BestOf = 'Best of',
    FirstTo = 'First to'
}