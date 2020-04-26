import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{username: string, image: string, email: string}>()
)

export const logout = createAction(
  '[Login Page] Logout'
)
