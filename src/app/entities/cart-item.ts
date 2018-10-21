import { Book } from "./book";
import { ShoppingCart } from "./shopping-cart";

export class CartItem {

    public id:number;
    public subtotal:number;
    public book:Book;
    public shippingCart : ShoppingCart;
    public qty:number;
    public toUpdate:boolean;


}
