import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UserService } from '../../services/user.service';
import * as actions from '../actions';
@Injectable()
export class  UsersDetailEffects {

    constructor(private actions$: Actions, private userService: UserService){}

    getUserDetail$ = createEffect(
      () => this.actions$.pipe(
          ofType( actions.GetUser ),
          mergeMap(
            ( action ) => {
                return this.userService.getUsersByLogin(action.login)
                .pipe(
                  map( (user: any) => actions.GetUserSuccess({ user: user })),
                  catchError( err => of( actions.GetUserError({ payload: err })))
                )
          })
      )
    );

}
