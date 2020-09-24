import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { MvProductDetail } from './product.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductFormComponent } from './product-form/product-form.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[];
  dataSource: MvProductDetail[] = [];
  errorMessage = '';

  constructor(private productDetail: ProductService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.displayedColumns = ['productId', 'productName', 'brand', 'productIdentifier', 'rate'];
    this.getAllProducts();
  }


  getAllProducts(){
    this.productDetail.getAllProductDetail().subscribe((data: any) => {
      if (data) {
        this.dataSource = data.data;
      } else {
        this.dataSource = [];
        this.errorMessage = 'No data';
      }
    });
  }

  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '25%';
    dialogConfig.panelClass = 'mat-form-dialog';
    const dialogRef = this.dialog.open(ProductFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts();
      // console.log(result);
    });
  }
  onEdit(){
    console.log('edit');
  }


}
