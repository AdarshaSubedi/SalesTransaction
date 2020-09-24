import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProductComponent }
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductFormComponent
  ],
  entryComponents:[ProductFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductComponent
  ],
  providers: [
    ProductComponent
  ]
})
export class ProductModule { }
