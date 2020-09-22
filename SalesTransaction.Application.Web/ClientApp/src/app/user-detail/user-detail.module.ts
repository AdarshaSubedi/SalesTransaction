import { MaterialModule } from './../shared/material.module';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';


const routes: Routes = [
  { path: '', component: UserDetailComponent }
];

@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  providers: [
  ],
  exports: [
    UserDetailComponent
  ]
})
export class UserDetailModule { }
