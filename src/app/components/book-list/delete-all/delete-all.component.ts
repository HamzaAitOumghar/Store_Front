import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../entities/book';
import { AddBookService } from '../../../service/add-book.service';
declare var $;
@Component({
  selector: 'app-delete-all',
  templateUrl: './delete-all.component.html',
  styleUrls: ['./delete-all.component.css']
})
export class DeleteAllComponent implements OnInit {

  @Input() books: Book[];
  @Output() refrech: EventEmitter<any> = new EventEmitter();

  constructor(private serviceBook: AddBookService) { }

  ngOnInit() {
  }

  deleteAll() {
    for (let b of this.books) {

      this.serviceBook.deleteBook(b.id).subscribe(

        (resp) => {
          console.log("Book number " + b.id + "was deleted ;");
          this.refrech.emit();
        },
        (err) => {
          console.log("Error in deleting Book number " + b.id);

        }

      );


    };
    $('#deleteAllBook').modal('hide');

  }

}
