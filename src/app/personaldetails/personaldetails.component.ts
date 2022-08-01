import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaldetails } from '../personaldetails';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
    selector: 'app-personaldetails',
    templateUrl: './personaldetails.component.html',
    styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {

    user: any;

    personalDetails: Personaldetails = new Personaldetails();

    constructor(private router: Router, private personalDetailsService: PersonaldetailsService) {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        console.log(this.user);
        this.personalDetails.firstName = this.user.firstName;
        this.personalDetails.email = this.user.userName;
        this.personalDetails.mobileNo = this.user.mobileNo;
        this.personalDetails.userId = +this.user.userId;
    }

    ngOnInit(): void {
    }

    addPersonalDetails() {
        this.personalDetailsService.setPersonalDetails(this.personalDetails);
        this.router.navigateByUrl("/employmentDetails");
    }

}
