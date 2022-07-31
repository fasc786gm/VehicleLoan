import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaldetails } from '../personaldetails';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
    selector: 'app-employmentdetails',
    templateUrl: './employmentdetails.component.html',
    styleUrls: ['./employmentdetails.component.css']
})
export class EmploymentdetailsComponent implements OnInit {

    personalDetails: Personaldetails;

    constructor(private router: Router, private personalDetailsService: PersonaldetailsService) {
        this.personalDetails = personalDetailsService.getPersonalDetails();
    }

    ngOnInit(): void {
    }

    addEmploymentDetails() {
        console.log("Employement Details: " + JSON.stringify(this.personalDetails));
        this.personalDetailsService.setPersonalDetails(this.personalDetails);
        this.router.navigateByUrl("/documents");
    }

}
