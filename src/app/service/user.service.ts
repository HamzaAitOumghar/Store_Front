import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  url = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  public newUser(username, email) {
    let headers;
    let userInfo = {
      "usernme": username,
      "email": email
    };
    if (localStorage.getItem('xAuthToken')) {
      headers = new HttpHeaders({
        'Authorization': 'Basic ajpq',
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
    return this.http.post(this.url+"user/newUser",userInfo,headers);

  }
 
  public retrievePassword(email:string){
    let headers;
    let userInfo = {
      "email": email
    };
    if (localStorage.getItem('xAuthToken')) {
      headers = new HttpHeaders({
        'Authorization': 'Basic ajpq',
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
    return this.http.post(this.url+"user/forgetPassword",userInfo,{ headers: headers});

  }

}
