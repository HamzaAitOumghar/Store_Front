import { Component, OnInit } from '@angular/core';
import { LoginClientService } from '../../service/login-client.service';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { UserService } from '../../service/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  serverPath: string = "http://localhost:8080/";
  loginError: boolean = false;
  loggedIn: boolean = false;

  emailSent: boolean = false;
  usernameExists: boolean;
  emailExists: boolean;
  username: string;
  email: string;

  emailNotExists: boolean = false;
  forgetPasswordEmailSent: boolean;
  recoverEmail: string;
  credential = { 'username': '', 'password': '' };



  constructor(private loginService: LoginService, private userService: UserService, public router: Router) {

  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      (resp) => {
        this.loggedIn = true;
      },
      (err) => {
        this.loggedIn=false;
      }
    );
  }

  onLogin() {
    this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
      (resp: any) => {
        localStorage.setItem("xAuthToken", resp.token);
        this.loggedIn = true;
        location.reload();
        this.router.navigate(['/home']);
        console.log(this.credential);
        
      },
      (err) => {
        this.loginError = true;
        this.loggedIn = false;

      }
    )
  }
  onNewAccount() {
    this.usernameExists = false;
    this.emailExists = false;
    this.emailSent = false;
    console.log("username : " + this.username);
    console.log("email : " + this.email);



    this.userService.newUser(this.username, this.email).subscribe(
      (resp) => {
        console.log("Done");
        console.log(resp);

        this.emailSent = true;
      },
      (err) => {
        console.log("Errors");
        console.log(err);
        if (err.error == "Username deja Existe ! !") {
          this.usernameExists = true;
        }
        if (err.error == "Email deja Existe ! !") {
          this.emailExists = true;
        }


      }
    );

  }

  onForgetPassword() {
    this.forgetPasswordEmailSent = false;
    this.emailNotExists = false;



    this.userService.retrievePassword(this.recoverEmail).subscribe(
      (resp) => {
        console.log(resp);
        this.forgetPasswordEmailSent = true;
      },
      (err) => {
        console.log(err);

        if (err.error == "Email n'existe pas !") {
          this.emailNotExists = true;
        }
      }

    );


  }

}
