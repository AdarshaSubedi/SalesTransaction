import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { MvProductDetail, MvNewProduct } from './product.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductFormComponent } from './product-form/product-form.component';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[];
  dataSource: MatTableDataSource<MvProductDetail>;
  errorMessage = '';
  selectedProduct: MvNewProduct = <MvNewProduct>{};
  selection = new SelectionModel<MvProductDetail>(false, []);

  constructor(private productDetail: ProductService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.displayedColumns = ['productId', 'productName', 'brand', 'productIdentifier', 'rate', 'startDate', 'endDate'];
    this.getAllProducts();
  }


  getAllProducts(){
    this.productDetail.getAllProductDetail().subscribe((response: any) => {
      if (response && response.data) {
        this.dataSource = new MatTableDataSource<MvProductDetail>(response.data);
        console.log(this.dataSource);
      } else {
        this.dataSource = new MatTableDataSource<MvProductDetail>();
        this.errorMessage = 'No data';
      }
    });
  }

  onAdd(){
    this.selection.clear()
    this.selectedProduct = <MvProductDetail>{}
    this.openDialog('Add');
  }
  onEdit(){
    this.openDialog('Edit');
  }

  openDialog(action: string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '25%';
    dialogConfig.panelClass = 'mat-form-dialog';
    dialogConfig.data = {data: this.selectedProduct, action: action};
    const dialogRef = this.dialog.open(ProductFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.selectedProduct = result;
        console.log(this.selectedProduct);
        if (action === 'Edit'){
          console.log('Edit feature pending')
        } else {
          this.productDetail.addProduct(result).subscribe(res => {
            this.getAllProducts();
          })
        }
      }

    });
  }

  selectRow(e:any, row: MvProductDetail){
    this.selectedProduct = {...row};
    this.selection.toggle(row);
  }

}
