import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './baseUrl';
import { Sales } from './sales';

@Injectable({
    providedIn: 'root'
})
export class SalesService {



    constructor(private httpClient: HttpClient) { }

    addSales(sales: Sales): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        let body = JSON.stringify(sales);
        return this.httpClient.post<any>(baseUrl + "/sales/addSales", body, { 'headers': headers });
    }

    getPendingSales(): Observable<any> {
        return this.httpClient.get<any>(baseUrl + "/sales/displaySales");
    }

    updateOrRejectApplication(salesId, status, message): Observable<any> {
        return this.httpClient.get<any>(baseUrl + "/sales/update/" + salesId + "/" + status + "/" + message);
    }

    getRejectedApplications(): Observable<any> {
        return this.httpClient.get<any>(baseUrl + "/sales/rejectedApplications");
    }

    getUserApplications(userId: number): Observable<any> {
        return this.httpClient.get<any>(baseUrl + "/sales/userAllApplications/" + userId);
    }

    getUserApprovedApplications(userId: number): Observable<any> {
        return this.httpClient.get<any>(baseUrl + "/sales/approvedApplications/" + userId);
    }

    getUserRejectedApplications(userId: number): Observable<any> {
        return this.httpClient.get<any>(baseUrl + "/sales/userRejectedApplications/" + userId);
    }

}
