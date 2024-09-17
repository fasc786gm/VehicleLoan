import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehilclemodel',
  templateUrl: './vehilclemodel.component.html',
  styleUrls: ['./vehilclemodel.component.css']
})
export class VehilclemodelComponent implements OnInit {

  vehicleModelarr:any = new Array();
  model:any;

  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit(): void {
    this.vehicleModelarr = this.vehicleService.getVehicleModelList();
        console.log(this.vehicleModelarr);

  }

  searchVehicleByModel(vehicleModel) {
    this.vehicleService.getVehicleByModel(vehicleModel).subscribe(data => {
      this.vehicleModelarr=vehicleModel;
      console.log(this.vehicleModelarr);
        this.router.navigateByUrl("/vehicleModel");
    })
}

viewDetails(vehicleId) {
  this.vehicleService.getVehicleById(vehicleId).subscribe(data => {
      this.vehicleService.setVehicleData(data);
      this.router.navigateByUrl("/vehicleSpecification");
  })
}


}
