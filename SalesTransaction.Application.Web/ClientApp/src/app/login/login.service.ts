import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from 'src/core/services/web-api.service';
import { LoginComponent } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: WebApiService) {
  }

  getLogin(json): Observable<any> {
    return this.api.post('/account/login', json);
  }

}
