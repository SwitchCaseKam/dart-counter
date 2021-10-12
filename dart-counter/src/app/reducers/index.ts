import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { gameConfigReducer, GameConfigState } from '../store/reducer/game-config.reducer';
import { gameStatusReducer, GameStatusState } from '../store/reducer/game-status.reducer';


export interface State {
  config: GameConfigState,
  status: GameStatusState
}

export const reducers: ActionReducerMap<State> = {
  config: gameConfigReducer,
  status: gameStatusReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
