import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { UsersModel } from '../../models/users.model';

export interface UsersState {
  users: UsersModel[];
  loaded: boolean;
  loading: boolean;
  err: any;
}

export const UsersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  err: null,
};

const _userListReducer = createReducer(UsersInitialState,

  on(actions.GetUsers, (state) => ({ ...state, loading: true })),

  on(actions.GetUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users]
  })),

  on(actions.GetUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  }))
);

export function UserListReducer(state: any, action: any) {
  return _userListReducer(state, action);
}
