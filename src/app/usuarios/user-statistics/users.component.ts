import { GetUsers } from './../../store/actions/users-list.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Subscription } from 'rxjs';

import { AppState } from 'src/app/store/app.reducers';

import { UsersModel } from 'src/app/models/users.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  ingresoNum: number = 0;
  egresoNum: number = 0;

  totalIngresos: number = 0;
  totalEgresos: number = 0;
  modelArrayFollower: number[] = [];
  modelArrayName: string[] = [];

  objetcArrary: {
    followers: number[];
    name: string[];
  };

  estadisticaSubs!: Subscription;

  public barChartLabels: Label[] = [];
  public barChartLegend = true;
  public barChartType: ChartType = 'bar';

  public barChartData: ChartDataSets[] = [];
  userDetail: UsersModel[] = [];
  error: any;
  private subscriptions: Subscription;
  constructor(
    private store: Store<AppState>,
    private UserService: UserService
  ) {}

  ngOnInit(): void {
    this.subscriptions = this.store
      .select('UsersList')
      .subscribe(({ users }) => {
        this.generateGrapich(users);
      });
    this.store.dispatch(GetUsers());
  }

  generateGrapich(infoUser: UsersModel[]) {
    this.modelArrayFollower = [];
    this.modelArrayName = [];
    infoUser.forEach((element) => {
      this.UserService.getUsersByFollower(element.login).subscribe((result: any) => {

        this.modelArrayFollower.push(result.followers);
        this.modelArrayName.push(result.login);

        this.barChartData = [
          { data: [this.modelArrayFollower, 0], label: 'Seguidores' },
        ];

        this.barChartLabels = this.modelArrayName;
      });
    });
  }
}
