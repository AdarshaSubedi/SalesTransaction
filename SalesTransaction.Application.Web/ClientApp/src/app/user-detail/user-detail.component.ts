import { UserDetailService } from './user-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private userDetail: UserDetailService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    // tslint:disable-next-line: radix
    const userId = parseInt(localStorage.getItem('userId'));
    this.userDetail.getUserDetail(userId).subscribe((response:any) => {
      if (response){
        console.log(response);
      } else {
        console.log('no data');
      }
    });
  }


}
