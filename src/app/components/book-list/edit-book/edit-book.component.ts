import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../entities/book';
import { UploadImageService } from '../../../service/upload-image.service';
import { AddBookService } from '../../../service/add-book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  @Input() newBook: Book;

  constructor(public uploadService: UploadImageService, private bookService: AddBookService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log("edit");
    console.log(this.newBook);

  }
  onSubmit() {
    this.bookService.updateBook(this.newBook).subscribe(
      (resp: any) => {
        console.log(resp);
        this.uploadService.modify(resp.id);

        console.log("Good");

      },
      (err) => {
        console.log(err);

      }
    );
  }

}
