import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { UserShipping } from '../entities/user-shipping';

@Injectable()
export class ShippingService {

  private url: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {

   }

   newShipping(shipping:UserShipping){
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
    return this.http.post(this.url+"shipping/add",shipping,{headers, responseType: 'text'});

   }

   userListShipping(){
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
    return this.http.get(this.url+"shipping/getUserListShipping",{headers, responseType: 'text'});
   }

   removeShipping(id: number) {
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
    return this.http.post(this.url+"shipping/remove",id,{headers, responseType: 'text'});

  }

  setDefaultShipping(id: number) {
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
    return this.http.post(this.url+"shipping/setDefault",id,{headers, responseType: 'text'});

  }


}
