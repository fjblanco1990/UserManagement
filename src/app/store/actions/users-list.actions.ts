import { createAction, props } from '@ngrx/store';
import { UsersModel } from '../../models/users.model';

export const GetUsers = createAction(
  '[Users] Cargar Usuarios'
);

export const GetUsersSuccess = createAction(
  '[Users] Cargar Usuarios Success',
  props<{ users: UsersModel[] }>()
);

export const GetUsersError = createAction(
  '[Users] Cargar Usuarios Success',
  props<{payload: any}>()
);




