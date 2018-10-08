import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user';
import { UserService } from '../../service/user.service';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

    form: FormGroup = new FormGroup({
        id: new FormControl(),
        email: new FormControl(),
        username: new FormControl(),
        firstName: new FormControl(),
        password: new FormControl(),
        lastName: new FormControl(),
        newPassword: new FormControl(),
        confirmPassword: new FormControl()
    })
    url: string = "http://localhost:8080/";
    dataFetched = false;
    loginError: boolean;
    loggedIn: boolean;
    usernameExiste: boolean;
    emailExiste: boolean;
    credential = {
        "username": "",
        "password": ""
    }
    user: User = new User();
    updateSuccess: boolean;
    newPassword: string;
    confirmPassword: string;
    incorrectPassword: boolean;
    mesgError: string;

    errorMessage: boolean = false;

    constructor(private userService: UserService, private loginService: LoginService, private router: Router) {

    }


    onUpdateUserInfo() {
      


        this.userService.updateUserInfo(this.form.value).subscribe(

            (resp) => {

                let auth = "Basic " + btoa(this.user.username + ':' + this.newPassword);
                localStorage.removeItem("auth");
                localStorage.setItem("auth", auth);
                this.updateSuccess = true;
                this.errorMessage = false;

            },
            (err) => {
                console.log(err.error);
                this.errorMessage = true;
                this.mesgError = err.error;
                this.updateSuccess = false;

            }


        );

    }


    getCurrentUser() {
        this.userService.getCurrentUser().subscribe(
            (resp: any) => {
                console.log("Hello 1 ");

                console.log(resp);

                this.user = resp;

                this.dataFetched = true;

                this.form = new FormGroup({
                    id: new FormControl(this.user.id),
                    email: new FormControl(this.user.email, Validators.required),
                    username: new FormControl(this.user.username, Validators.required),
                    firstName: new FormControl(this.user.firstName),
                    password: new FormControl('', Validators.required),
                    lastName: new FormControl(this.user.lastName),
                    newPassword: new FormControl('', Validators.required),
                    confirmPassword: new FormControl('', [Validators.required])
                },{validators:this.checkPasswords});
                console.log("Hello");

            },
            (err) => {
                console.log(err);

            }
        )
    }

    checkPasswords(group: FormGroup) { 
        let pass = group.controls.newPassword.value;
        let confirmPass = group.controls.confirmPassword.value;

        return pass === confirmPass ? null : { notSame: true }
    }

    ngOnInit() {
        this.loginService.checkSession().subscribe(
            (resp) => {
                this.loggedIn = true;
            },
            (err) => {
                this.loggedIn = false;
                this.router.navigate(['/myaccount'])
            }
        );
        this.getCurrentUser();
    }

}
