import { Component, OnInit } from '@angular/core';
import { Book } from '../../entities/book';
import { CartItem } from '../../entities/cart-item';
import { ShoppingCart } from '../../entities/shopping-cart';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  selectedBook: Book;
  cartItemList: CartItem[] = [];
  cartItemNumber: number;
  shoppingCart: ShoppingCart = new ShoppingCart();
  cartItemUpdated: boolean=false;
  emptyCart: boolean=false;




  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.getShoppingCart();
    this.getCartItemList();
  }


  onSelect(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['bookDetails', this.selectedBook.id]);
  }

  onRemoveCartItem(cartItem: CartItem) {
    this.cartService.removeCartItem(cartItem.id).subscribe(
      (resp) => {
        console.log(resp);

        this.getShoppingCart();
        this.getCartItemList();
      },
      (err) => {
        console.log(err);

      }
    );
  }

  onUpdateCartItem(cartItem: CartItem) {
    this.cartService.updateCartItem(cartItem.id, cartItem.qty).subscribe(
      (resp) => {
        this.cartItemUpdated = true;
        this.getShoppingCart();
      },
      (err) => {
        console.log(err);

      }
    )
  }
 
  getCartItemList(){
    this.cartService.getCartItemList().subscribe(
      (resp:any)=>{
        this.cartItemList=JSON.parse(resp);
        console.log(resp);

        this.cartItemNumber=this.cartItemList.length;
      },
      (err)=>{
        console.log(err);
        
      }

    );
  }

  getShoppingCart(){
    this.cartService.getShoppingCart().subscribe(
      (resp:any)=>{
        this.shoppingCart=JSON.parse(resp);
        console.log("Shopping cart");
        
        console.log(this.shoppingCart);

      },
      (err)=>{
        console.log(err);
      }

    );
  }

  onCheckout(){
    if(this.cartItemNumber==0){
      this.emptyCart=true;
    }
    //this.router.navigate(['/order']);
  }



}
