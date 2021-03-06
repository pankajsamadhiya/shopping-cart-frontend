import { Injectable } from '@angular/core';
import {Http, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import {Order} from '../model/Order';

@Injectable()
export class OrderService {

  private url: string;

  constructor(private http: Http) {
    this.url = 'http://localhost:8080';
  }

  public getOrder(id: number) {
    return this.http.get(this.url + '/orders/' + id);
  }

  public getOrders() {
    return this.http.get(this.url + '/orders');
  }

  public addOrder(order: Order) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.url + '/orders', order.toJson(), options);
  }
}
