import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { MvProductDetail } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[];
  dataSource: MvProductDetail[] = [];
  errorMessage = '';

  constructor(private productDetail: ProductService) { }

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

  onEdit(){
    console.log('edit');
  }

  onAdd(){
    console.log('add');
  }

}
