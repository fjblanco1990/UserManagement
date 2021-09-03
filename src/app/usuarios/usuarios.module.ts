import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './user-statistics/users.component';
import { SharedErrorComponent } from '../shared/shared-error/shared-error.component';
import { ChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    ListaComponent,
    UserDetailComponent,
    UsersComponent,
    SharedErrorComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    ListaComponent,
    UserDetailComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UsuariosModule { }
