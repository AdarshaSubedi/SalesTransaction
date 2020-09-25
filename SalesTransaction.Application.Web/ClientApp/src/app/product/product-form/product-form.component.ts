import { MvNewProduct } from './../product.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, AfterViewInit {

  productForm: FormGroup;
  action: string;
  userId = parseInt(localStorage.getItem('userId'));
  selectedProduct: MvNewProduct = <MvNewProduct>{};

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.action = data.action;
      this.selectedProduct = data.data || {};
    }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      brand: ['', Validators.required],
      productIdentifier: ['', Validators.required],
      rate: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      insertPersonId: [ this.userId ]
    });
  }

  onSubmit(){
    this.dialogRef.close(this.selectedProduct);
  }
  onClose(){
    this.dialogRef.close();
  }

  ngAfterViewInit() {
    this.productForm.updateValueAndValidity();
  }

}
