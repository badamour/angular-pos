import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderDetail} from '../dto/orderDetail';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  readonly baseUrl = environment.apiUrl + '/orderDetail';

  constructor(private http: HttpClient) {
  }

  getAllOrderDetails(): Observable<OrderDetail[]> {
    return this.http.get<OrderDetail[]>('http://localhost:8080/auth/orderDetail');
  }

  saveOrderDetails(orderDetails: OrderDetail): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, orderDetails);
  }
}
