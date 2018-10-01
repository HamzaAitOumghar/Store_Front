import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedIn: boolean=false;

  constructor(private loginService: LoginService,private router:Router) { }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      (data) => {
        console.log(data);
        this.loggedIn = true;
      },
      (err) => {
        this.loggedIn = false;
      }
    );
  }
  logout() {
  
    this.loginService.logout().subscribe(
      (data) => {
        console.log("data");
        localStorage.clear();
        location.reload();
      },
      (err) => {
        console.log("error");
        console.log(err);
      },()=>{
        console.log("finally");
        

      }
      
    );
    this.router.navigate(['/']);
  }

}
