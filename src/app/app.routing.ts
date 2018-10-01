import {  Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookListComponent } from './components/book-list/book-list.component';



export const routes :Routes =[
  {
    path: '',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component:LoginComponent,
  }
  ,
  {
    path: 'ajouterlivre',
    component:AddBookComponent,
  }
  ,
  {
    path: 'listlivre',
    component:BookListComponent,
  }
];



