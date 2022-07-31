import { Component, NgZone, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { Router } from '@angular/router';

@Component({
    selector: 'app-addvehicle',
    templateUrl: './addvehicle.component.html',
    styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {

    hasBaseDropZoneOver: boolean = false;
    uploader: FileUploader;
    title: string;

    vehicle: Vehicle = new Vehicle();

    vehiclePic: File;

    imageUrl: any;

    file: File;

    twoWheelers: any = ['Hero', 'Bajaj', 'TVS', 'Honda', 'Royal Enfield', 'Suzuki', 'Yamaha', 'Mahindra', 'UM', 'KTM', 'KAWASAKI', 'OLA',];
    threeWheelers: any = [];
    fourWheelers: any = ['TATA', 'Mahindra', 'BMW', 'Toyota', 'Hyundai', 'Mercedes-Benz', 'KIA', 'Volkswagen', 'Audi', 'Maruti Suzuki', 'Land-Rover', 'Honda',];
    vehicles: any = [];
    constructor(private vehicleService: VehicleService, private router: Router) {

    }

    ngOnInit(): void {

    }

    onFileChange(event) {
        this.vehiclePic = event.target.files[0];
    }

    addVehicle() {
        let data = new FormData();

        data.append('file', this.vehiclePic);
        data.append('upload_preset', 'baglocater');
        data.append('cloud_name', 'baglocater');
        this.vehicleService.uploadImage(data).subscribe(imageData => {
            console.log(imageData);
            this.vehicle.carImageUrl = imageData.secure_url;
            this.vehicleService.addVehicle(this.vehicle).subscribe(data => {
                if (data.isInserted == 0) {
                    //Failed 
                    console.log(data);
                } else {
                    //Success
                    console.log(data);
                    alert("Vehicle Added Successfully")
                    this.router.navigateByUrl("/adminDashboard/addLoan");
                }
            });
        })

    }

    typeChange() {
        if (this.vehicle.vehicleType == "2-wheeler") {
            this.vehicles = this.twoWheelers;
        } else if (this.vehicle.vehicleType == "3-wheeler") {
            this.vehicles = this.threeWheelers
        } else {
            this.vehicles = this.fourWheelers;
        }

    }

}
