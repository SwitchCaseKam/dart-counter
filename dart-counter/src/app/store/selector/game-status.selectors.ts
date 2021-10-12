import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGameStatus from '../reducer/game-status.reducer';

export const selectGameConfigState = createFeatureSelector<fromGameStatus.GameStatusState>(
    fromGameStatus.gameStatusFeatureKey,
);
