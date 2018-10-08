import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../entities/user';

@Injectable()
export class UserService {
  url = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  public newUser(username, email) {
    let headers;
    let userInfo = {
      "username": username,
      "email": email
    };
    if (localStorage.getItem('xAuthToken')&&localStorage.getItem('auth')) {
      headers = new HttpHeaders({
        'Authorization': localStorage.getItem('auth'),
        'x-auth-token': localStorage.getItem('xAuthToken'),
        'Content-type': 'application/json'

      });
    }
    else{
      headers = new HttpHeaders({
        'Authorization': 'Basic ajpq',
        'Content-type': 'application/json'
      });
    }
    return this.http.post(this.url+"user/newUser",userInfo,{headers, responseType: 'text'});

  }
 
  public retrievePassword(email:string){
    let headers;
    let userInfo = {
      "email": email
    };
    if (localStorage.getItem('xAuthToken')&&localStorage.getItem('auth')) {
      headers = new HttpHeaders({
        'Authorization': localStorage.getItem('auth'),
        'x-auth-token': localStorage.getItem('xAuthToken'),
        'Content-type': 'application/json'

      });
    }
    else{
      headers = new HttpHeaders({
        'Authorization': 'Basic ajpq',
        'Content-type': 'application/json'
      });
    }
    return this.http.post(this.url+"user/forgetPassword",userInfo,{ headers: headers, responseType: 'text'});

  }
  public getCurrentUser(){
    let headers;
    if (localStorage.getItem('xAuthToken')&&localStorage.getItem('auth')) {
      headers = new HttpHeaders({
        'Authorization': localStorage.getItem('auth'),
        'x-auth-token': localStorage.getItem('xAuthToken'),
        'Content-type': 'application/json'

      });
    }
    else{
      headers = new HttpHeaders({
        'Content-type': 'application/json'
      });
    }
    return this.http.get(this.url+"user/getCurrentUser",{ headers: headers});

  }
  public updateUserInfo(userInfo){
    
    let headers;
    if (localStorage.getItem('xAuthToken')&&localStorage.getItem('auth')) {
      headers = new HttpHeaders({
        'Authorization': localStorage.getItem('auth'),
        'x-auth-token': localStorage.getItem('xAuthToken'),
        'Content-type': 'application/json'

      });
    }
    else{
      headers = new HttpHeaders({
        'Content-type': 'application/json'
      });
    }

    return this.http.post(this.url+"user/updateUserInfo",userInfo,{ headers: headers, responseType: 'text'});

  }

}
