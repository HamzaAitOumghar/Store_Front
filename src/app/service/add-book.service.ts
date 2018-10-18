import { Injectable } from '@angular/core';
import { Book } from '../entities/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AddBookService {

  constructor(private http:HttpClient) { 

  }

  sendBook(book:Book) {
    let url = "http://localhost:8080/book/add";
   
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

    return this.http.post(url,book,{ headers: headers });

  }

  getBookList() {
    let url = "http://localhost:8080/book/all";
   
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
    return this.http.get(url,{ headers: headers });

  }

  getBookById(id){
    let url = "http://localhost:8080/book/"+id;
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
    return this.http.get(url,{ headers: headers });
  }

  updateBook( book:Book){
    let url = "http://localhost:8080/book/update" ;
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
    return this.http.post(url,book,{ headers: headers });
  }

  deleteBook ( id : number){

    let url = "http://localhost:8080/book/delete/"+id ;
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
    return this.http.post(url,{},{ headers: headers });
  }

}
