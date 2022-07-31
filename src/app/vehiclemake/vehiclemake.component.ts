import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
    selector: 'app-vehiclemake',
    templateUrl: './vehiclemake.component.html',
    styleUrls: ['./vehiclemake.component.css']
})
export class VehiclemakeComponent implements OnInit {

    vehicleMake: any = new Array();
    constructor(private vehicleService: VehicleService, private router: Router) { }

    ngOnInit(): void {
        this.vehicleMake = this.vehicleService.getVehicleMake();
        console.log(this.vehicleMake);

    }

    viewDetails(vehicleId) {
        this.vehicleService.getVehicleById(vehicleId).subscribe(data => {
            this.vehicleService.setVehicleData(data);
            this.router.navigateByUrl("/vehicleSpecification");
        })
    }

}
