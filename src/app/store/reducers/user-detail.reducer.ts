import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { UserModel } from 'src/app/models/user.model';

export interface UserDetailState {
  login: string,
  user: UserModel;
  loaded: boolean;
  loading: boolean;
  err: any;
}

export const UserDetailInitialState: UserDetailState = {
  login: null,
  user: null,
  loaded: false,
  loading: false,
  err: null,
};

const _userDetailReducer = createReducer(UserDetailInitialState,

  on(actions.GetUser, (state, { login }) => ({
     ...state,
     loading: true,
     login: login
    })),

  on(actions.GetUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: {...user}
  })),

  on(actions.GetUserError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    err: payload
  }))
);

export function UserDetailReducer(state: any, action: any) {
  return _userDetailReducer(state, action);
}
