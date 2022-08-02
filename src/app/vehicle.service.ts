import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { arrayMax } from 'highcharts';
import { Observable } from 'rxjs';
import baseUrl from './baseUrl';
import { Vehicle } from './vehicle';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {

    vehicleData: any;
    vehicleMakeList: any = new Array();
    VehicleModelList:any=new Array();

    constructor(private httpClient: HttpClient) { }

    addVehicle(vehicle: Vehicle): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(vehicle);
        return this.httpClient.post<any>(baseUrl + "/vehicles/addVehicle", body, { 'headers': headers });
    }

    uploadImage(vals): Observable<any> {
        let data = vals;
        return this.httpClient.post<any>('https://api.cloudinary.com/v1_1/baglocater/upload', data);
    }

    getAllVehicles(): Observable<any> {
        return this.httpClient.get<any>(baseUrl + "/vehicles/viewAllVehicles");
    }

    getVehicleById(vehicleId: number): Observable<any> {
        return this.httpClient.get<any>(baseUrl + "/vehicles/getVehicleById/" + vehicleId);
    }

    getVehicleByMake(vehicleMake: string): Observable<any> {
        return this.httpClient.get<any>(baseUrl + "/vehicles/vehicleMake/" + vehicleMake);
    }

    getVehicleByModel(vehicleModel: string): Observable<any> {
        return this.httpClient.get<any>(baseUrl+ "/vehicles/vehicleModel/"+vehicleModel);
    }

    setVehicleData(data): void {
        this.vehicleData = data;
    }

    getVehicleData(): any {
        return this.vehicleData;
    }

    setVehicleMake(vehicleMake) {
        this.vehicleMakeList = vehicleMake;
    }

    getVehicleMake() {
        return this.vehicleMakeList
    }
    getVehicleModelList():any{
        return this.VehicleModelList;
    }
    setVehicleModelList(vehicleModel):any{
        this.VehicleModelList=vehicleModel;
    }

}
function http<T>(http: any): Observable<any> {
    throw new Error('Function not implemented.');
}

