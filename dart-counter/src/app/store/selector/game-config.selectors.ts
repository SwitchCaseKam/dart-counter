import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGameConfig from '../reducer/game-config.reducer';

export const selectGameConfigState = createFeatureSelector<fromGameConfig.GameConfigState>(
    fromGameConfig.gameConfigFeatureKey,
);

export const selectPointsMode = createSelector(
    selectGameConfigState,
    (gameConfigState: fromGameConfig.GameConfigState) => gameConfigState.points
);

export const selectLegsMode = createSelector(
    selectGameConfigState,
    (gameConfigState: fromGameConfig.GameConfigState) => gameConfigState.legs
);

export const selectSetsMode = createSelector(
    selectGameConfigState,
    (gameConfigState: fromGameConfig.GameConfigState) => gameConfigState.sets
);

export const selectPlayersNames = createSelector(
    selectGameConfigState,
    (gameConfigState: fromGameConfig.GameConfigState) => gameConfigState.players
);