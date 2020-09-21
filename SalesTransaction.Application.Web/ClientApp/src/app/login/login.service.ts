import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'https://localhost:44379/api';
  // headers = new HttpHeaders();

  constructor(private httpClient: HttpClient) {
    // this.headers.set('Access-Control-Allow-Origin', '*');
  }

  getLogin(json): Observable<any>{
    return this.httpClient.post<any>(this.apiUrl + '/account/login', JSON.stringify(json));
  }

}
