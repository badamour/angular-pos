import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../dto/order';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  readonly baseUrl = environment.apiUrl + '/order';

  constructor(private http: HttpClient) {
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:8080/auth/orders');
  }

  saveOrder(order: Order): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, order);
  }
}
