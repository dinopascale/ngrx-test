import { Action, createReducer, on } from '@ngrx/store';
import * as LoginPageActions from '../actions/login-page.actions'

export interface UserState {
  username: string,
  image: string
}

export const userKey = 'user';

export const initialState: UserState = {
  username: null,
  image: null
}

const userReducer = createReducer(
  initialState,
  on(LoginPageActions.login, (state, {username, image}) => ({username, image})),
  on(LoginPageActions.logout, state => ({username: null, image: null}))
)

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
