import { Component, OnInit } from '@angular/core';
import { AddBookService } from '../../service/add-book.service';
import { Book } from '../../entities/book';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-list-client',
  templateUrl: './book-list-client.component.html',
  styleUrls: ['./book-list-client.component.css']
})
export class BookListClientComponent implements OnInit {

  filtredQuery="";
  rowsOnPage=5;

  selectedBook:Book;
  bookList:Book[]=[];


  constructor(private bookService : AddBookService,private router:Router,private http:HttpClient,private route : ActivatedRoute) { }



  onSelect(book:Book){
    this.selectedBook=book;
    this.router.navigate(['/bookDetails',this.selectedBook.id]);
  }


  ngOnInit() {

   

    this.route.queryParams.subscribe(params=>{
        if(params['bookList']){
          console.log("Fitred book list");
          this.bookList=params['bookList'];
        }
        else{
          this.bookService.getBookList().subscribe(
            (resp:any)=>{
              this.bookList=resp;
              console.log(resp);
            },
            (err)=>{
              console.log("Error in getting bookList");
              
            }
          );
        }

      });
  }


}
