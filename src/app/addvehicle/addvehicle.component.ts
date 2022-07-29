import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
    selector: 'app-addvehicle',
    templateUrl: './addvehicle.component.html',
    styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {

    vehiclePic: any;
    vehicle: Vehicle;

    constructor(private vehicleService: VehicleService) { }

    ngOnInit(): void {
    }

    onFileChange(event) {
        this.vehiclePic = event.target.files[0];
    }

    addVehicle() {
        let formData = new FormData();
        formData.append('vehiclePic', this.vehiclePic);
        this.vehicle.vehiclePic = formData;
        this.vehicleService.addVehicle(this.vehicle).subscribe(data => {
            if (data.isInserted == 0) {
                //Failed 
            } else {
                //Success
            }
        });
    }

}
