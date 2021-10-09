import { createAction, props } from '@ngrx/store';
import { LegsField } from 'src/app/game-config/game-config/config-fields/legs-config-field/legs-config.model';
import { SetsField } from 'src/app/game-config/game-config/config-fields/sets-config-field/sets-config.model';

const actionPrefix = '[GameConfig]';

export const loadGameConfigs = createAction(`${actionPrefix} Load GameConfigs`);

export const setPointsGameMode = createAction(`${actionPrefix} Set Points Game Mode`, (pointsMode: number) => ({pointsMode}));
export const setLegsGameMode = createAction(`${actionPrefix} Set Legs Game Mode`, (legsMode: LegsField) => ({legsMode}));
export const setSetsGameMode = createAction(`${actionPrefix} Set Sets Game Mode`, (setsMode: SetsField) => ({setsMode}));

export const addPlayer = createAction(`${actionPrefix} Add player`);
export const deletePlayer = createAction(`${actionPrefix} Delete player`);
