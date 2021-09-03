import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetUser } from 'src/app/store/actions';
import { AppState } from '../../store/app.reducers';
import { UserModel } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';
import { GetAuht } from '../../store/actions/user-detail.actions';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  userDetail: UserModel;
  error: any;
  private subscriptions: Subscription;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscriptions = this.store.select('UserDetail').subscribe( ({ user , err}) => {
        this.userDetail =  user;
        this.error = err;
    })

    this.route.params.subscribe(({ login }) => {
      this.store.dispatch(GetUser({ login: login }))
    })
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
