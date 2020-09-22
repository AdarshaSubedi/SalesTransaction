import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from 'src/core/services/web-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private api: WebApiService) {
  }


  getLogin(json): Observable<any> {
    return this.api.post('/account/login', json);
  }


  getUserDetail(id){

    return this.api.get('/userdetail', new HttpParams().set('json', JSON.stringify({userId : id})));
    // JSON.stringify({userId : id})
  }
}
