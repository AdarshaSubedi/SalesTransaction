import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';
import { LoginComponent } from './../login/login.component';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from '../login/login.service';
import { UserDetailComponent } from './user-detail.component';
import { Overlay } from '@angular/cdk/overlay';

const routes: Routes = [
  { path: '', component: UserDetailComponent }
];

@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    // LoginService,
    LoginComponent,
    FormBuilder,
    MatSnackBar,
    Overlay
  ],
  exports: [
    UserDetailComponent
  ]
})
export class UserDetailModule { }
