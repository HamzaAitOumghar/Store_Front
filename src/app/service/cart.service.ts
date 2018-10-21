import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class CartService {

  private url: string = "http://localhost:8080/shoppingCart";

  constructor(private http: HttpClient, private router: Router) { }

  addItem(id: number, qty: number) {

    let cartItemInfo = {
      "bookId": id,
      "qty": qty
    }
    let headers;

    if (localStorage.getItem('xAuthToken') && localStorage.getItem('auth')) {
      headers = new HttpHeaders({
        'Authorization': localStorage.getItem('auth'),
        'x-auth-token': localStorage.getItem('xAuthToken'),
        'Content-type': 'application/json'

      });
    }
    else {
      headers = new HttpHeaders({
        'Content-type': 'application/json'
      });
    }
    return this.http.post(this.url + "/add", cartItemInfo, { headers, responseType: 'text' });

  }


  getCartItemList() {
    let headers;

    if (localStorage.getItem('xAuthToken') && localStorage.getItem('auth')) {
      headers = new HttpHeaders({
        'Authorization': localStorage.getItem('auth'),
        'x-auth-token': localStorage.getItem('xAuthToken'),
        'Content-type': 'application/json'

      });
    }
    else {
      headers = new HttpHeaders({
        'Content-type': 'application/json'
      });
    }

    return this.http.get(this.url + "/getCartList", { headers, responseType: 'text' });

  }

  getShoppingCart() {
    let headers;

    if (localStorage.getItem('xAuthToken') && localStorage.getItem('auth')) {
      headers = new HttpHeaders({
        'Authorization': localStorage.getItem('auth'),
        'x-auth-token': localStorage.getItem('xAuthToken'),
        'Content-type': 'application/json'

      });
    }
    else {
      headers = new HttpHeaders({
        'Content-type': 'application/json'
      });
    }

    return this.http.get(this.url + "/getCart", { headers, responseType: 'text' });

  }


  updateCartItem(id: number, qty: number) {

    let cartItemInfo = {
      "cartItemId": id,
      "qty": qty
    }
    let headers;

    if (localStorage.getItem('xAuthToken') && localStorage.getItem('auth')) {
      headers = new HttpHeaders({
        'Authorization': localStorage.getItem('auth'),
        'x-auth-token': localStorage.getItem('xAuthToken'),
        'Content-type': 'application/json'

      });
    }
    else {
      headers = new HttpHeaders({
        'Content-type': 'application/json'
      });
    }
    return this.http.post(this.url + "/update", cartItemInfo, { headers, responseType: 'text' });

  }

  removeCartItem(id:number){
    let headers;

    if (localStorage.getItem('xAuthToken') && localStorage.getItem('auth')) {
      headers = new HttpHeaders({
        'Authorization': localStorage.getItem('auth'),
        'x-auth-token': localStorage.getItem('xAuthToken'),
        'Content-type': 'application/json'

      });
    }
    else {
      headers = new HttpHeaders({
        'Content-type': 'application/json'
      });
    }
    return this.http.post(this.url + "/remove", id, { headers, responseType: 'text' });


  }


}
