import { createAction, props } from '@ngrx/store';
import { GameConfigState } from 'src/app/models/game-config.model';

const actionPrefix = '[GameConfig]';

export const loadGameConfigs = createAction('[GameConfig] Load GameConfigs');

export const startGame = createAction(`${actionPrefix} Start Game`, (gameConfig: GameConfigState) => ({gameConfig}));



