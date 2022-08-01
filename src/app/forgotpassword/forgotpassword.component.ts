import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'app-forgotpassword',
    templateUrl: './forgotpassword.component.html',
    styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

    userId: number;
    password: string;
    confirmPassword: string;

    constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

    ngOnInit(): void {
        this.userId = +this.route.snapshot.paramMap.get('userId');
        console.log(this.userId);

    }

    updateUser() {
        this.userService.resetPassword(this.userId, this.password).subscribe(data => {
            console.log(data);
            if (data == 1) {
                this.router.navigateByUrl("/login");
            } else {
                this.router.navigateByUrl("/home");
            }

        })
    }

}
