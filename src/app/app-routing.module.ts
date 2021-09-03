import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './usuarios/lista/lista.component';
import { UserDetailComponent } from './usuarios/user-detail/user-detail.component';
import { UsersComponent } from './usuarios/user-statistics/users.component';
import { SharedErrorComponent } from './shared/shared-error/shared-error.component';
import { UserAuthGuard } from './services/user-auth.guard';

const routes: Routes = [
  { path: '', component: ListaComponent },
  { path: 'home', component: ListaComponent },
  { path: 'user/:login', component: UserDetailComponent , canActivate: [UserAuthGuard]},
  { path: 'user-grpich', component: UsersComponent},
  { path: '**', component: SharedErrorComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
