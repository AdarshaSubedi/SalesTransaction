import { MvUserDetail } from './user-detail.model';
import { UserDetailService } from './user-detail.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  displayedColumns: string[];
  dataSource: MvUserDetail[] = [];

  constructor(private userDetail: UserDetailService) { }

  ngOnInit(): void {
    this.displayedColumns = ['userId', 'firstName', 'lastName', 'email', 'password'];
    this.getUserDetails();
  }

  getUserDetails() {
    // tslint:disable-next-line: radix
    const userId = parseInt(localStorage.getItem('userId'));
    this.userDetail.getUserDetail(userId).subscribe((data: any) => {
      if (data) {
        this.dataSource = [data];
      } else {
        console.log('no data');
      }
    });
  }


}
