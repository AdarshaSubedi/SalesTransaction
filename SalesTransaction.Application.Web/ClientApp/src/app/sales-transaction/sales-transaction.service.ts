import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from 'src/core/services/web-api.service';

@Injectable({
  providedIn: 'root'
})
export class SalesTransactionService {

  constructor(private api: WebApiService) { }

  getAllSalesTransactionDetail(){
    return this.api.get('/salestransaction/allsalestransactiondetail');
  }

  addSalesTransaction(json): Observable<any> {
    return this.api.post('/salestransaction/addsalestransaction', json);
  }
  updateSAlesTransaction(json): Observable<any> {
    return this.api.post('/salestransaction/updatesalestransaction', json);
  }

}
