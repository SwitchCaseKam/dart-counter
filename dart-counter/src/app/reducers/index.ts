import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { GameConfigState } from '../models/game-config.model';
import { GameStatusState } from '../models/game-status.model';
import { gameConfigReducer } from '../store/reducer/game-config.reducer';
import { gameStatusReducer } from '../store/reducer/game-status.reducer';


export interface State {
  config: GameConfigState,
  status: GameStatusState,
}

export const reducers: ActionReducerMap<State> = {
  config: gameConfigReducer,
  status: gameStatusReducer
};

export const selectGameConfig = (state: State) => state.config;

export const selectGameStatus = (state: State) => state.status;

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
