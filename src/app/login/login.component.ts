import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup | any;
    title = 'material-login';
    user: User;
    userId: number;
    userName: String;
    password: String;
    constructor(private router: Router, private userService: UserService) {
        this.user = new User();
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(
                '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
            ),]),
            password: new FormControl('', [Validators.required, Validators.pattern(
                '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
            )])
        });
    }

    ngOnInit(): void {
    }

    onSubmit() {
        if (!this.loginForm.valid) {
            return;
        }
        localStorage.setItem('user', this.loginForm.value)
        this.router.navigate(['/home'])
    }

    loginUser() {
        this.user.userId = this.userId;
        this.user.password = this.password;
        this.userService.loginUser(this.user).subscribe(data => {
            console.log(data);
            if (data.ValidUser == "true") {
                sessionStorage.setItem("user", JSON.stringify(data));
                sessionStorage.setItem("isLoggedIn", "true");
                // Swal.fire(
                //     'Welcome ' + data.firstName,
                //     'You clicked the button!',
                //     'success'
                // )
                if (data.isAdmin == "true") {
                    this.router.navigate(['/adminDashboard']);
                } else {
                    this.router.navigate(['/userDashboard']);
                }
                // window.location.reload();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid Username or Password!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }

        })
    }
}
