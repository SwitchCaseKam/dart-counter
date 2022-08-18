import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameStatusState } from 'src/app/models/game-status.model';
import * as fromGameStatus from '../reducer/game-status.reducer';

export const selectGameState = createFeatureSelector<GameStatusState>(
    fromGameStatus.gameStatusFeatureKey,
);

export const selectAllPlayers = createSelector(
    selectGameState,
    (gameStatusState: GameStatusState) => gameStatusState
);