import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'

import { MustMatch } from './_helpers/must-match.validator';
import { Router } from '@angular/router';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    user: User;
    firstName: String;
    lastName: String;
    email: String;
    mobileNo: String;
    password: String;

    constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
        this.user = new User();
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validators: [
                MustMatch('password', 'confirmPassword'),
                MustMatch('firstName', 'lastName')
            ]
        });
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }


        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    registerUser() {
        console.log(this.firstName);

        this.user.firstName = this.firstName;
        this.user.lastName = this.lastName;
        this.user.email = this.email;
        this.user.mobileNo = this.mobileNo;
        this.user.password = this.password;

        this.userService.registerUser(this.user).subscribe(data => {
            console.log(data);
            Swal.fire(
                'Registration Successfull',
                'You clicked the button!',
                'success'
            )
            this.router.navigateByUrl("/login");
        })
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

}