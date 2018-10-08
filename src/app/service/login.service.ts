import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {

  }
  sendCredential(username: string, password: string) {
    let url = "http://localhost:8080/token";
    let encodedCredentials = btoa(username + ':' + password);
    let basicHeader = "Basic " + encodedCredentials;

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': basicHeader
    });

    localStorage.setItem("auth",basicHeader);

    return this.http.get(url, { headers: headers });

  }

  checkSession() {
    let url = "http://localhost:8080/checkSession";
    console.log("check 1 : " + localStorage.getItem('xAuthToken'));
    let headers;

    if(localStorage.getItem('xAuthToken')&&localStorage.getItem('auth')){
     headers = new HttpHeaders({
      'Authorization': localStorage.getItem('auth'),
      'x-auth-token': localStorage.getItem('xAuthToken')
      
    });
    return this.http.get(url, { headers: headers, responseType: 'text' });
  }else{
    return this.http.get(url, { responseType: 'text' });

  }

   
  }

logout() {
  let url = "http://localhost:8080/user/logout";
  let headers = new HttpHeaders({
    'Authorization': localStorage.getItem('auth'),
    'x-auth-token': localStorage.getItem('xAuthToken')
  });

  return this.http.post(url, {}, { headers: headers, responseType: 'text' });

}


}
