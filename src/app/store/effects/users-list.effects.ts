import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UserService } from '../../services/user.service';
import * as actions from '../actions';
@Injectable()
export class  UsersListEffects {

    constructor(private actions$: Actions, private userService: UserService){}

    getListUsers$ = createEffect(
      () => this.actions$.pipe(
          ofType( actions.GetUsers ),
          mergeMap(
            () => {
                return this.userService.getUsers()
                .pipe(
                  map( (data: any) => actions.GetUsersSuccess({ users: data })),
                  catchError( err => of( actions.GetUsersError({ payload: err })))
                )
          })
      )
    );



}
