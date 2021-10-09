export interface SetsField {
    mode: SetsMode,
    targetNumber: number
}

export enum SetsMode {
    BestOf = "Best of",
    FirstTo = "First to"
}