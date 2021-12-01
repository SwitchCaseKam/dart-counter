import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGameConfig from '../reducer/game-config.reducer';

export const selectGameConfigState = createFeatureSelector<fromGameConfig.GameConfigState>(
    fromGameConfig.gameConfigFeatureKey,
);

export const selectGameConfig = createSelector(
    selectGameConfigState,
    (gameConfigState: fromGameConfig.GameConfigState) => gameConfigState?.data
);