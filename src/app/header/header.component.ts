import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    username: string;
    user: any;
    checkUser: any;

    constructor(private loginService: UserService, public router: Router) { }

    ngOnInit(): void {
    }

    getUserName() {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        return this.user.firstName;
    }

    isloggedIn() {
        return sessionStorage.getItem("isLoggedIn");
    }

    logout() {
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("isLoggedIn");
        this.router.navigate(['/']);
    }

    checkIsAdmin() {
        this.checkUser = JSON.parse(sessionStorage.getItem("user"));
        if (this.checkUser.isAdmin == "true") {
            return true;
        } else {
            return false;
        }
    }

}
