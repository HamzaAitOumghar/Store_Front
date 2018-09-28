import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public credential = {'username':'','password':''};
  public loggedIn =false ;

  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      (data)=>{
          this.loggedIn=true;
          console.log("Session True");
          
      },
      (err)=>{
        this.loggedIn=false;        
        console.log("Session False");

      }
    );
  }

  onSubmit(){
    this.loginService.sendCredential(this.credential.username,this.credential.password).subscribe(
      (data:any)=>{
           localStorage.setItem("xAuthToken",data.token);
           this.loggedIn=true;
           location.reload();
      },
      (err)=>{
          console.log(err);
          
      }


    );
  }

}
