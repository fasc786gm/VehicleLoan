import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-applyloan',
    templateUrl: './applyloan.component.html',
    styleUrls: ['./applyloan.component.css']
})
export class ApplyloanComponent implements OnInit {

    isLoggedIn: string;
    vehicleType: string = "4-wheeler";

    constructor(private router: Router) {
        console.log("Inside");
        console.log(sessionStorage.getItem("isLoggedIn"));

        this.isLoggedIn = sessionStorage.getItem("isLoggedIn");
        if (this.isLoggedIn == null) {
            router.navigateByUrl("/login");
        }
    }

    ngOnInit(): void {
    }

    searchByMake(make: string) {
        console.log(make);
        this.router.navigateByUrl("/carMake");
    }

    searchVehicleByType(type: string) {
        console.log(type);

    }

}
