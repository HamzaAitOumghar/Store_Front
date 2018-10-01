import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MatButtonModule, MatToolbarModule, MatGridListModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatFormField, MatFormFieldModule } from '../../node_modules/@angular/material';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './service/login.service';
import { HttpClientModule } from '@angular/common/http';
import { routes} from './app.routing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddBookService } from './service/add-book.service';
import { UploadImageService } from './service/upload-image.service';
import { BookListComponent } from './components/book-list/book-list.component';
import { DetailsBookComponent } from './components/book-list/details-book/details-book.component';
import { DeleteBookComponent } from './components/book-list/delete-book/delete-book.component';
import { EditBookComponent } from './components/book-list/edit-book/edit-book.component';
import { DeleteAllComponent } from './components/book-list/delete-all/delete-all.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddBookComponent,
    BookListComponent,
    DetailsBookComponent,
    DeleteBookComponent,
    EditBookComponent,
    DeleteAllComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    RouterModule,
    RouterModule.forRoot(routes),
    MatGridListModule,
    FormsModule
  
  ],
  providers: [LoginService,AddBookService,UploadImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
