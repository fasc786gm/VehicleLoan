import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'app-userid',
    templateUrl: './userid.component.html',
    styleUrls: ['./userid.component.css']
})
export class UseridComponent implements OnInit {

    userId: number;
    email: string;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit(): void {
    }

    checkUserId() {
        this.userService.checkUserId(this.userId, this.email).subscribe(data => {
            if (data == false) {
                alert("Invalid User Id");
            } else {
                alert("Check Your Mail");
                this.router.navigateByUrl("/home");
            }

        })
    }

}
