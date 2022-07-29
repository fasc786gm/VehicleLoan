import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'app-checkeligibility',
    templateUrl: './checkeligibility.component.html',
    styleUrls: ['./checkeligibility.component.css']
})
export class CheckeligibilityComponent implements OnInit {

    user: any;
    mobile: string;
    firstname: string;
    email: string;

    constructor() { }

    ngOnInit(): void {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        console.log("Inside");

        this.mobile = String(this.user.mobileNo);
        this.email = String(this.user.userName);
        this.firstname = String(this.user.firstName);
    }

}
