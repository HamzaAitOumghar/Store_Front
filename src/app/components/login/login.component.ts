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
  }

  onSubmit(){
    this.loginService.sendCredential(this.credential.username,this.credential.password).subscribe(
      (data:any)=>{
          console.log(data);
          localStorage.set("xAuthToken",data.json().token)
          this.loggedIn=true;
          location.reload();      
      },
      (err)=>{
          console.log(err);
          
      }


    )
  }

}
