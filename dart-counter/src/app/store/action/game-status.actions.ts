import { createAction, props } from '@ngrx/store';
import { GameConfig } from 'src/app/models/game-config.model';

const actionPrefix = '[GameStatus]';

export const loadGameStatuss = createAction(`${actionPrefix} Load GameStatuss`);

export const createPlayers = createAction(`${actionPrefix} Create players in game`, (gameConfig: GameConfig) => ({gameConfig}));



