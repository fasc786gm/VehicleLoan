import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
    selector: 'app-applyloan',
    templateUrl: './applyloan.component.html',
    styleUrls: ['./applyloan.component.css']
})
export class ApplyloanComponent implements OnInit {

    isLoggedIn: string;
    vehicleType: string = "4-wheeler";

    allVehicles: any = [];

    constructor(private router: Router, private vehicleService: VehicleService) {
        console.log("Inside");
        console.log(sessionStorage.getItem("isLoggedIn"));

        this.isLoggedIn = sessionStorage.getItem("isLoggedIn");
        if (this.isLoggedIn == null) {
            router.navigateByUrl("/login");
        }
    }

    ngOnInit(): void {
        this.vehicleService.getAllVehicles().subscribe(data => {
            this.allVehicles = data;
            console.log(this.allVehicles);

        })
    }

    searchByMake(make: string) {
        console.log(make);
        this.vehicleService.getVehicleByMake(make).subscribe(data => {
            // console.log(data);
            this.vehicleService.setVehicleMake(data);
            this.router.navigateByUrl("/vehicleMake");
        });
    }

    searchVehicleByType(type: string) {
        console.log(type);

    }

    viewDetails(vehicleId: number) {
        this.vehicleService.getVehicleById(vehicleId).subscribe(data => {
            this.vehicleService.setVehicleData(data);
            this.router.navigateByUrl("/vehicleSpecification");
        });
    }

    fakeArray() {
        return new Array(4);
    }

}
