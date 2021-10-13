import { createAction, props } from '@ngrx/store';

const actionPrefix = '[GameStatus]';

export const loadGameStatus = createAction(`${actionPrefix} Load GameStatus`);

export const startGame = createAction(`${actionPrefix} Start Game`, (playersNames: string[]) => ({playersNames}));
