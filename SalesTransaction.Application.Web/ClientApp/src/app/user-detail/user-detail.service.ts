import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor() { }


    // getUserDetail(json: String){
  //   return this.httpClient.get(this.apiUrl + '/userdetail', JSON.stringify(json))
  //   .pipe(
  //     tap( // Log the result or error
  //       data => this.log(filename, data),
  //       error => this.logError(filename, error)
  //     )
  //   );
  // }
}
