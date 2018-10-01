import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../entities/book';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  @Input() bookInput :Book;

  constructor() { }

  ngOnInit() {

  }
  
  ngOnChanges(){
    console.log("hello");
    console.log(this.bookInput);

  }
}
