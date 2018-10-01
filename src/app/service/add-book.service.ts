import { Injectable } from '@angular/core';
import { Book } from '../entities/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AddBookService {

  constructor(private http:HttpClient) { 

  }

  sendBook(book:Book) {
    let url = "http://localhost:8080/book/add";
   

    let headers = new HttpHeaders({
      'Authorization': 'Basic ajpq',
      'Content-type':'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')

    });

    return this.http.post(url,book,{ headers: headers });

  }
  getBookList() {
    let url = "http://localhost:8080/book/all";
   

    let headers = new HttpHeaders({
      'Authorization': 'Basic ajpq',
      'Content-type':'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')

    });

    return this.http.get(url,{ headers: headers });

  }

  getBookById(id){
    let url = "http://localhost:8080/book/"+id;
    let headers = new HttpHeaders({
      'Authorization': 'Basic ajpq',
      'Content-type':'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')

    });
    return this.http.get(url,{ headers: headers });
  }

  updateBook( book:Book){
    let url = "http://localhost:8080/book/update" ;
    let headers = new HttpHeaders({
      'Authorization': 'Basic ajpq',
      'Content-type':'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')

    });
    return this.http.post(url,book,{ headers: headers });
  }

  deleteBook ( id : number){

    let url = "http://localhost:8080/book/delete/"+id ;
    let headers = new HttpHeaders({
      'Authorization': 'Basic ajpq',
      'Content-type':'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')

    });
    return this.http.post(url,{},{ headers: headers });
  }

}
