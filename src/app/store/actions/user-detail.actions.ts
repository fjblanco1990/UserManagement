import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';


export const GetUser = createAction(
  '[Users] Cargar Usuarios',
  props<{ login: string }>()
);

export const GetUserSuccess = createAction(
  '[Users] Cargar Usuario Success',
  props<{ user: UserModel }>()
);

export const GetUserError = createAction(
  '[Users] Cargar Usuario Success',
  props<{ payload: any }>()
);

export const GetAuht = createAction(
  '[Users] Cargar auth',
  props<{ login: number }>()
);

export const GetAuhtSuccess = createAction(
  '[Users] Cargar auth Success',
  props<{ userScroe: any }>()
);


