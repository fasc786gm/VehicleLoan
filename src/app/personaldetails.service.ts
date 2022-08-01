import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './baseUrl';
import { Personaldetails } from './personaldetails';

@Injectable({
    providedIn: 'root'
})
export class PersonaldetailsService {

    personalDetails: Personaldetails = new Personaldetails();

    constructor(private httpClient: HttpClient) { }

    addPersonalDetails(personalDetails: Personaldetails): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        let body = JSON.stringify(personalDetails);
        return this.httpClient.post<any>(baseUrl + "/personalDetails/addpersonalDetails", body, { 'headers': headers });
    }

    setPersonalDetails(details) {
        this.personalDetails = details;
    }

    getPersonalDetails() {
        return this.personalDetails;
    }
}
