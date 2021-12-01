import { createAction, props } from '@ngrx/store';
import { GameConfig } from 'src/app/models/game-config.model';

const actionPrefix = '[GameConfig]';

export const loadGameConfigs = createAction('[GameConfig] Load GameConfigs');

export const startGame = createAction(`${actionPrefix} Start Game`, (gameConfig: GameConfig) => ({gameConfig}));



