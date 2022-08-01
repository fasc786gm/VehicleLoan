import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { VehicleService } from '../vehicle.service';

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
    age: number;
    employment: string;
    yearlySalary: number;

    vehicleData: any;

    constructor(private router: Router, private vehicleService: VehicleService) { }

    ngOnInit(): void {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        console.log("Inside");

        this.mobile = String(this.user.mobileNo);
        this.email = String(this.user.userName);
        this.firstname = String(this.user.firstName);

        this.vehicleData = this.vehicleService.getVehicleData();
    }

    checkEligibility() {
        if (this.age >= 21 && this.yearlySalary >= 300000) {
            alert("Eligible for Loan");
            this.router.navigateByUrl("/personalDetails");
        } else {
            alert("Not Eligible for Loan");
        }
    }

}
