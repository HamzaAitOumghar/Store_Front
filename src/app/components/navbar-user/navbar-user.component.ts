import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {

  loggedIn=false;
  constructor(private loginService:LoginService ,private router:Router) {

   }

  ngOnInit() {
   
    this.loginService.checkSession().subscribe(
      (resp)=>{
        this.loggedIn=true;
      },
      (err)=>{
        this.loggedIn=false;
      }
    );
  }
  logOut(){
    

    this.loginService.logout().subscribe(
      (data) => {
       
        localStorage.clear();
        console.log(localStorage);
        
       location.reload();
       
        
      },
      (err) => {
        console.log("error");
        console.log(err);
      },()=>{
        console.log("finally");
      }
      
    );

  }
  searchBookByTitle(){
    
  }
}
