import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service';

@Component({
    selector: 'app-adminrejectedapplicants',
    templateUrl: './adminrejectedapplicants.component.html',
    styleUrls: ['./adminrejectedapplicants.component.css']
})
export class AdminrejectedapplicantsComponent implements OnInit {

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

    rejectedApplicants: any;

    constructor(private salesService: SalesService) { }

    ngOnInit(): void {
        this.salesService.getRejectedApplications().subscribe(applicants => {
            this.rejectedApplicants = applicants;
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

}
