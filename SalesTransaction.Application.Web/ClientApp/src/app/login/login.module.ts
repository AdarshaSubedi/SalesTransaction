import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from './../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    LoginService, FormBuilder
  ],

})
export class LoginModule { }
