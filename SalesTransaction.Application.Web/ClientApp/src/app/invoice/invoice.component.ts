import { UtilityService } from './../../core/services/utility.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { InvoiceService } from './invoice.service';
import { MvInvoiceDetail } from './invoice.model';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  displayedColumns: string[];
  dataSource: MatTableDataSource<MvInvoiceDetail>;
  errorMessage = '';
  selection = new SelectionModel<MvInvoiceDetail>(false, []);

  constructor(
    private invoiceService: InvoiceService
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['invoiceId', 'customerName', 'amount', 'amountAfterDiscount']
    this.getAllInvoice();
  }

  getAllInvoice(){
    this.invoiceService.getAllInvoiceDetail().subscribe((response: any) => {
      if (response && response.data) {
        this.dataSource = new MatTableDataSource<MvInvoiceDetail>(response.data);
      } else {
        this.dataSource = new MatTableDataSource<MvInvoiceDetail>();
        this.errorMessage = 'No Data';
      }
    });
  }

  onGenerate(){
    console.log('no');
  }

  selectRow(e: any, row: MvInvoiceDetail){
    this.selection.toggle(row);
  }

}
