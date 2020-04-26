import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromUser from './user.reducer';

export interface AppState {
  user: fromUser.UserState
}

export const reducers: ActionReducerMap<AppState> = {
  [fromUser.userKey]: fromUser.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
