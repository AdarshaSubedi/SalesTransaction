import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UtilityService } from 'src/core/services/utility.service';
import { SalesTransactionFormComponent } from './sales-transaction-form/sales-transaction-form.component';
import { MvNewSalesTransaction, MvSalesTransactionDetail } from './sales-transaction.model';
import { SalesTransactionService } from './sales-transaction.service';

@Component({
  selector: 'app-sales-transaction',
  templateUrl: './sales-transaction.component.html',
  styleUrls: ['./sales-transaction.component.scss']
})
export class SalesTransactionComponent implements OnInit {

  displayedColumns: string[];
  dataSource: MatTableDataSource<MvSalesTransactionDetail>;
  errorMessage = '';
  selectedSalesTransaction: MvNewSalesTransaction = <MvNewSalesTransaction>{};
  selection = new SelectionModel<MvSalesTransactionDetail>(false, []);

  constructor(private salesTransactionService: SalesTransactionService,
    private dialog: MatDialog,
    private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.displayedColumns = ['salesTransactionId', 'customerName', 'productName', 'quantity', 'rate', 'totalAmount'];
    this.getAllSalesTransaction();
  }

  getAllSalesTransaction(){
    this.salesTransactionService.getAllSalesTransactionDetail().subscribe((response: any) => {
      if (response && response.data){
        this.dataSource = new MatTableDataSource<MvSalesTransactionDetail>(response.data);
      } else {
        this.dataSource = new MatTableDataSource<MvSalesTransactionDetail>();
        this.errorMessage = 'No data';
      }
    });
  }

  onAdd(){
    this.selection.clear();
    this.selectedSalesTransaction = <MvSalesTransactionDetail>{};
    this.openDialog('Add');
  }
  onEdit(){
    this.openDialog('Edit');
  }

  openDialog(action: string){
    if (action === 'Edit' && !this.selection.hasValue()){
      this.utilityService.openSnackBar('Please Select Row first', 'warn');
      return;
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '25%';
    dialogConfig.panelClass = 'mat-form-dialog';
    dialogConfig.data = {data: this.selectedSalesTransaction, action: action};
    const dialogRef = this.dialog.open(SalesTransactionFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (action === 'Edit'){
          this.salesTransactionService.updateSAlesTransaction(result).subscribe(res => {
            this.utilityService.openSnackBar('Sales Transaction Edited', 'success');
            this.getAllSalesTransaction();
          });

        } else {
          this.salesTransactionService.addSalesTransaction(result).subscribe(res => {
            this.utilityService.openSnackBar('Sales Transaction added successfully', 'success');
            this.getAllSalesTransaction();
          });
        }
      }

    });

  }

  selectRow(e: any, row: MvSalesTransactionDetail) {
    this.selectedSalesTransaction = {...row};
    this.selection.toggle(row);
  }


}
