import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
  { path: '', component: ProductComponent }
];

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    ProductComponent
  ],
  providers: [
  ]
})
export class ProductModule { }
