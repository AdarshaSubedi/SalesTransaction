import { Injectable } from '@angular/core';
import { WebApiService } from 'src/core/services/web-api.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private api: WebApiService) { }

  getAllInvoiceDetail(){
    return this.api.get('/invoice/allinvoicedetail');
  }

}
