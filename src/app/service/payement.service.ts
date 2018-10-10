import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserPayment } from '../entities/user-payment';

@Injectable()
export class PayementService {

  private url: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }


  newPayement(payment: UserPayment) {
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
        'Authorization': 'Basic ajpq',
        'Content-type': 'application/json'
      });
    }
    return this.http.post(this.url+"payment/add",payment,{headers, responseType: 'text'});

  }
  getPayementList() {
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
        'Authorization': 'Basic ajpq',
        'Content-type': 'application/json'
      });
    }
    return this.http.get(this.url+"payment/getUserPaymentList",{headers, responseType: 'text'});
  }

  removePayement(id: number) {
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
        'Authorization': 'Basic ajpq',
        'Content-type': 'application/json'
      });
    }
    return this.http.post(this.url+"payment/remove",id,{headers, responseType: 'text'});

  }

   setDefaultPayement(id: number) {
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
        'Authorization': 'Basic ajpq',
        'Content-type': 'application/json'
      });
    }
    return this.http.post(this.url+"payment/setDefault",id,{headers, responseType: 'text'});

  }





}
