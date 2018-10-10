import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MatButtonModule, MatToolbarModule, MatGridListModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatFormField, MatFormFieldModule, MatTabsModule, MatProgressSpinnerModule } from '../../node_modules/@angular/material';
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
import { NavbarUserComponent } from './components/navbar-user/navbar-user.component';
import { HomeComponent } from './components/home/home.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { LoginClientService } from './service/login-client.service';
import { UserService } from './service/user.service';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PayementService } from './service/payement.service';


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
    NavbarUserComponent,
    HomeComponent,
    MyAccountComponent,
    MyProfileComponent
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
    MatTabsModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    RouterModule,
    RouterModule.forRoot(routes),
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [LoginService,AddBookService,UploadImageService,LoginClientService,UserService,PayementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
