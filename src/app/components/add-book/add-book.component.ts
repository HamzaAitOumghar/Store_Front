import { Component, OnInit } from '@angular/core';
import { Book } from '../../entities/book';
import { AddBookService } from '../../service/add-book.service';
import { UploadImageService } from '../../service/upload-image.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  newBook: Book = new Book();
  bookAdded: boolean ;

  constructor(private bookService: AddBookService,public uploadService:UploadImageService) { }

  ngOnInit() {
    this.bookAdded=false;
    this.newBook.active=true;
    this.newBook.category="management";
    this.newBook.language="english";
    this.newBook.format="paperback";

  }

  onSubmit() {
    
     this.bookService.sendBook(this.newBook).subscribe(
       (resp:any) => {
         
         this.uploadService.upload(resp.id)
         this.bookAdded = true;
         this.newBook=new Book();
         this.newBook.active=true;
         this.newBook.category="management";
         this.newBook.language="english";
         this.newBook.format="paperback";
       },
       (err) => {
         console.log(err);
         this.bookAdded = false;
       }
     );

  }
}
