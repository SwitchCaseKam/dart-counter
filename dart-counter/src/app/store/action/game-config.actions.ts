import { createAction, props } from '@ngrx/store';

const actionPrefix = '[GameConfig]';

export const loadGameConfigs = createAction(`${actionPrefix} Load GameConfigs`);

export const setPointsGameMode = createAction(`${actionPrefix} Set Points Game Mode`, (pointsMode: number) => ({pointsMode}));
export const setLegsGameMode = createAction(`${actionPrefix} Set Legs Game Mode`);
export const setSetsGameMode = createAction(`${actionPrefix} Set Sets Game Mode`);

export const addPlayer = createAction(`${actionPrefix} Add player`);
export const deletePlayer = createAction(`${actionPrefix} Delete player`);
