import { Component, OnInit } from '@angular/core';
import { AddBookService } from '../../service/add-book.service';
import { Book } from '../../entities/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    selectedBook : Book;
    checked:boolean;
    bookList:Book[];
    allChecked:boolean;
    removeBookList:Book[]=new Array();
    columnsToDisplay = ['Title'	,'Auteur'	,'Categorie	','Prix du liste'	,'Prix Unitaire'	,'Active ?'	,'Operation'];



  constructor(private bookService:AddBookService,private router:Router) { }

  ngOnInit() {
    this.bookService.getBookList().subscribe(
      (resp:any)=>{
          console.log(resp);
          this.bookList=resp;
      },
      (err)=>{
        console.log(err);
        
      }

    );
  }

  onSelect(book){
    this.selectedBook=book; 
  }
  onRefrech($event){
    this.ngOnInit();      
    this.allChecked=false;
  }

  updateSelected(event){
    if(event==true){
        this.allChecked=true;
        this.removeBookList=this.bookList;
    }
   
  }
  updateRemoveBookList(event,book:Book){
    if(event==true){
      this.removeBookList.push(book);
      console.log(this.removeBookList);
      
    }
    else{
      this.removeBookList.filter(b=>b.id!=book.id);
      this.removeBookList=this.removeBookList.filter(b=>b.id!=book.id);
      
    }

  }
 
}
