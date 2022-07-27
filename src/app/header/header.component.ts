import { Component, OnInit } from '@angular/core';
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

    constructor(private loginService: UserService) { }

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
    }

}
