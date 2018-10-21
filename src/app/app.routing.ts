import {  Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { HomeComponent } from './components/home/home.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { BookListClientComponent } from './components/book-list-client/book-list-client.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';



export const routes :Routes =[
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path: 'admin/login',
    component:LoginComponent,
  }
  ,
  {
    path: 'admin/ajouterlivre',
    component:AddBookComponent,
  }
  ,
  {
    path: 'admin/listlivre',
    component:BookListComponent,
  },
  {
    path: 'home',
    component:HomeComponent,
  },
  {
    path: 'myaccount',
    component:MyAccountComponent,
  },
  {
    path: 'myprofile',
    component:MyProfileComponent,
  },
  {
    path: 'listlivre',
    component:BookListClientComponent
  },
  {
    path: 'bookDetails/:id',
    component:BookDetailsComponent
  },
  {
    path: 'shoppingCart',
    component:ShoppingCartComponent
  }

];



