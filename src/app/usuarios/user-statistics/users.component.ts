import { GetUsers } from './../../store/actions/users-list.actions';
import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class UsersComponent implements OnInit, OnDestroy {
  modelArrayFollower: any[] = [];
  modelArrayName: string[] = [];

  estadisticaSubs!: Subscription;

  public barChartLabels: Label[] = [];
  public barChartLegend = true;
  public barChartType: ChartType = 'bar';

  public barChartData: ChartDataSets[] = [];
  userDetail: UsersModel[] = [];
  error: any;
  private subscriptions = new Subscription();
  constructor(
    private store: Store<AppState>,
    private UserService: UserService
  ) {}

  ngOnInit(): void {
    this.UserService.getUsers().subscribe( (lstUser: any) => {
      this.userDetail = lstUser;
      this.generateGrapich(this.userDetail);
    });
  }

  ngOnDestroy() {

  }

  generateGrapich(infoUser: UsersModel[]) {
    this.modelArrayFollower = [];
    this.modelArrayName = [];
    infoUser.forEach((element) => {
     this.UserService.getUsersByFollower(element.login).subscribe((result: any) => {
        this.modelArrayFollower.push(result.followers);
        this.modelArrayName.push(result.login);       
      })
    });
    this.barChartData = [
      // 65, 59, 80, 81, 56, 55, 40

      // 0: 22649
      // 1: 21266
      // 2: 8215
      // 3: 9845
      // 4: 511 
      // 5: 124
      // 6: 1399
      // 7: 153
      // this.modelArrayFollower

      // 22649,21266,8215 ,9845,511, 124,1399,153
      { data: [this.modelArrayFollower], label: 'Seguidores' },
    ];
    this.barChartLabels = this.modelArrayName;
    
  }
}
