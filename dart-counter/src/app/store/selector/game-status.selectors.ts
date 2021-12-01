import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGameStatus from '../reducer/game-status.reducer';

export const selectGameState = createFeatureSelector<fromGameStatus.GameStatusState>(
    fromGameStatus.gameStatusFeatureKey,
);

export const selectAllPlayers = createSelector(
    selectGameState,
    (gameStatusState: fromGameStatus.GameStatusState) => gameStatusState.data
);