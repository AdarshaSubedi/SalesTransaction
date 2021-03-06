import { UtilityService } from 'src/core/services/utility.service';
import { MvNewCustomer } from './../customer.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit, AfterViewInit {

  customerForm: FormGroup;
  action: string;
  userId = parseInt(localStorage.getItem('userId'));
  selectedCustomer: MvNewCustomer = <MvNewCustomer>{};

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<CustomerFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private utilityService: UtilityService) {
      this.action = data.action;
      this.selectedCustomer = data.data || {};
    }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: '',
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['',
       [Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(8), Validators.maxLength(15)]],
      insertPersonId: [ this.userId ]
    });
  }

  onSubmit(){
    this.dialogRef.close(this.selectedCustomer);
  }
  onClose(){
    this.dialogRef.close();
    this.utilityService.openSnackBar('Operation Cancelled', 'warn');
  }

  ngAfterViewInit() {
    this.customerForm.updateValueAndValidity();
  }

}
