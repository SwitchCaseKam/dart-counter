import { createAction, props } from '@ngrx/store';
import { GameConfigState } from '../reducer/game-config.reducer';

const actionPrefix = '[GameStatus]';

export const loadGameStatus = createAction(`${actionPrefix} Load GameStatus`);

export const startGame = createAction(`${actionPrefix} Start Game`, (gameConfig: GameConfigState) => ({gameConfig}));

export const submitPoints = createAction(`${actionPrefix} Submit Points`, (name: string, points: number) => ({name, points}));