import { GetUsers } from './../../store/actions/users-list.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersModel } from '../../models/users.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { UserConfigService } from 'src/app/services/user-config.service';
import { Subscription } from 'rxjs';
import { GetAuht } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit, OnDestroy {
  usuarios: UsersModel[] = [];
  loading: boolean = false;
  private subscriptions: Subscription;
  constructor(private store: Store<AppState>,  private userConfigService: UserConfigService) {}

  ngOnInit(): void {
   this.subscriptions = this.store.select('UsersList').subscribe(({ users, loading, err }) => {
      this.usuarios = users;
      this.loading = loading;
    });
    this.store.dispatch(GetUsers());

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  getDetailUser(user: string, id: number) {
    this.store.dispatch(GetAuht({ login: id }))
    this.userConfigService.getDetailUser(user);

  }
}
