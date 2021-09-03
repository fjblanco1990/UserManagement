import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
   UsersList: reducers.UsersState,
   UserDetail: reducers.UserDetailState
}

export const appReducers: ActionReducerMap<AppState> = {
   UsersList: reducers.UserListReducer,
   UserDetail: reducers.UserDetailReducer
}
