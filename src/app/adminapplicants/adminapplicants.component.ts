import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../sales.service';

@Component({
    selector: 'app-adminapplicants',
    templateUrl: './adminapplicants.component.html',
    styleUrls: ['./adminapplicants.component.css']
})
export class AdminapplicantsComponent implements OnInit {

    firstName: string;
    age: number;
    email: string;
    mobileNo: string;
    loanTenure: number;
    loanAmount: number;
    rateOfInterest: number;
    emi: number;
    vehicleMake: string;
    vehicleModel: string;
    price: number;
    aadharUrl: string;
    panUrl: string;
    photoUrl: string;
    salarySlipUrl: string;

    pendingApplicants: any;

    message: string = "";

    constructor(private router: Router, private salesService: SalesService) { }

    ngOnInit(): void {
        this.salesService.getPendingSales().subscribe(pendingSales => {
            this.pendingApplicants = pendingSales;
        })
    }

    viewPersonalDetails(firstName, age, email, mobileNo): void {
        this.firstName = firstName;
        this.age = age;
        this.email = email;
        this.mobileNo = mobileNo;
    }

    viewLoanDetails(loanAmount, loanTenure, rateOfInterest, emi) {
        this.loanAmount = loanAmount;
        this.loanTenure = loanTenure;
        this.rateOfInterest = rateOfInterest;
        this.emi = emi;
    }

    viewVehicleDetails(vehicleMake, vehicleModel, price) {
        this.vehicleMake = vehicleMake;
        this.vehicleModel = vehicleModel;
        this.price = price;
    }

    viewDocumentDetails(aadharUrl, panUrl, photoUrl, salarySlipUrl) {
        this.aadharUrl = aadharUrl;
        this.panUrl = panUrl;
        this.photoUrl = photoUrl;
        this.salarySlipUrl = salarySlipUrl;
    }

    approve(salesId) {
        this.message = "Ok";
        this.salesService.updateOrRejectApplication(salesId, "approved", this.message).subscribe(data => {
            console.log(data);
            location.reload()
        })
    }

    reject(salesId) {
        this.message = prompt("Enter Reason for Rejection: ");
        console.log(this.message);

        this.salesService.updateOrRejectApplication(salesId, "rejected", this.message).subscribe(data => {
            console.log(data);
            location.reload();
        })
    }

}
