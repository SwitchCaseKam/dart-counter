import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { gameConfigReducer, GameConfigState } from '../store/reducer/game-config.reducer';


export interface State {
  config: GameConfigState
}

export const reducers: ActionReducerMap<State> = {
  config: gameConfigReducer
};

export const selectGameConfig = (state: State) => state.config;

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
