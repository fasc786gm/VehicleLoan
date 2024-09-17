import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';
import { SalesService } from '../sales.service';

@Component({
    selector: 'app-emischeduler',
    templateUrl: './emischeduler.component.html',
    styleUrls: ['./emischeduler.component.css']
})
export class EmischedulerComponent implements OnInit {

    emiNextDate: string;
    emi: number;
    loanTenure: number;
    rateOfInterest: number;
    vehicleName: string;

    user: any;
    userId: number;

    loandetails:any;

    details: any = new Array();
    loanAmount1:any;

    constructor(private salesService: SalesService, private router: Router, private loanService:LoanService ) { }


    ngOnInit(): void {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        this.loandetails=JSON.parse(sessionStorage.getItem("loan"));
        this.userId = +this.user.userId;
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
                    
        var newdate = year + "/" + month + "/" + day;

        if (day == 1) {
            this.emiNextDate = day + "/" + month + "/" + year;
        } else {
            this.emiNextDate = day + "/" + (month + 1) + "/" + year;
        }
        console.log(this.emiNextDate);
        this.salesService.getEmi(this.userId).subscribe(data => {
            this.details = data;
            console.log(this.details);

        });

    }

    payEmi(){
        alert('payment initiated');
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        console.log(this.emi);
        console.log(this.loandetails);
        this.loanAmount1=this.loanAmount1-this.emi;
    }

}
