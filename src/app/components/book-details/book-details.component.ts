import { Component, OnInit } from '@angular/core';
import { Book } from '../../entities/book';
import { AddBookService } from '../../service/add-book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {


  idBook:number;
  book:Book=new Book();
  numberList : number[]=[1,2,3,4,5,6,7,8,9];
  qty:number;

  addBookSuccess:boolean=false;
  notEnoughStock:boolean=false;
  

  constructor(private bookService:AddBookService,private cartService:CartService,private router:Router,private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((par)=>{
      this.idBook=Number.parseInt(par['id']);

      console.log("Test");
          console.log(par['id']);

          this.bookService.getBookById(this.idBook).subscribe(
            (resp:any)=>{
                this.book=resp;
                
                console.log("Test");
                console.log(resp);
                this.addBookSuccess=true;
            },
            (err)=>{
              console.log(err);
              this.addBookSuccess=false;
            }
      
          );

    });

 
    this.qty=1;
  }

  addOnCart(){
      this.cartService.addItem(this.book.id,this.qty).subscribe(
        (resp)=>{
          console.log(resp);
          this.addBookSuccess=true;
          this.notEnoughStock=false;
        },
        (err)=>{
          console.log(err);
          this.notEnoughStock=true;
          this.addBookSuccess=false;
        }

      )
  }

  backToList(){
    this.router.navigate(['/listlivre']);
  }

}
