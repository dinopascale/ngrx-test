import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromUser from './user.reducer';

export interface State {
}

export const reducers: ActionReducerMap<State> = {
  [fromUser.userKey]: fromUser.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
