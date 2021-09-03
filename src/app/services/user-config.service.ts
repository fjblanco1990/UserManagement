import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {
  userScoreModel: any;
  constructor(private router: Router, private store: Store<AppState>) { }


  getDetailUser(login: string){
      if (!login) {
        return;
      }
      this.router.navigate([ '/user', login ])
  }



}
