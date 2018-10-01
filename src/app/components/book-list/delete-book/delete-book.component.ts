import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../entities/book';
import { AddBookService } from '../../../service/add-book.service';
declare var $;

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  @Input() book : Book;
  @Output() refrech: EventEmitter<any> = new EventEmitter();

  constructor(private serviceBook:AddBookService) { }

  ngOnInit() {
  }

  supprimerBook(){
    this.serviceBook.deleteBook(this.book.id).subscribe(
      (resp)=>{
        console.log("Livre Was deleted");
        this.refrech.emit();
        $('#deleteBook').modal('hide');
        
      },
      (err)=>{
        console.log("Probleme dans la suppression du livre");
        
      }

    );

  }
}
