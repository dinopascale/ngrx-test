import { AppState } from '../reducers';
import { createFeatureSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';
import * as fromUser from '../reducers/user.reducer';

export const selectUser = createFeatureSelector<AppState, UserState>(fromUser.userKey);
