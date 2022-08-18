import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameConfigState } from 'src/app/models/game-config.model';
import * as fromGameConfig from '../reducer/game-config.reducer';

export const selectGameConfigState = createFeatureSelector<GameConfigState>(
    fromGameConfig.gameConfigFeatureKey,
);

export const selectGameConfig = createSelector(
    selectGameConfigState,
    (gameConfigState: GameConfigState) => gameConfigState
);