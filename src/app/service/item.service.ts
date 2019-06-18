import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '../dto/item';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  readonly baseUrl = environment.apiUrl + '/items';

  constructor(private http: HttpClient) {
  }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:8080/auth/items');
  }

  saveItem(item: Item): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, item);
  }
}
