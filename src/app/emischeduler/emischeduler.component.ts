import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    details: any = new Array();

    constructor(private salesService: SalesService, private router: Router) { }

    ngOnInit(): void {
        this.user = JSON.parse(sessionStorage.getItem("user"));
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

}
