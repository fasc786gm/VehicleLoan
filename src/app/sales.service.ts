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

}
