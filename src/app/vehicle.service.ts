import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './baseUrl';
import { Vehicle } from './vehicle';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {

    constructor(private httpClient: HttpClient) { }

    addVehicle(vehicle: Vehicle): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(vehicle);
        return this.httpClient.post<any>(baseUrl + "/users/register", body, { 'headers': headers });
    }
}
