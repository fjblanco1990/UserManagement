import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUserComponent } from './shared-user/shared-user.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SharedUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    SharedUserComponent,
  ]
})
export class SharedModule { }
