import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './baseUrl';
import { Documents } from './documents';

@Injectable({
    providedIn: 'root'
})
export class DocumentsService {

    constructor(private httpClient: HttpClient) { }

    addDocuments(documents: Documents): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        let body = JSON.stringify(documents);
        return this.httpClient.post<any>(baseUrl + "/documents/addDocument", body, { 'headers': headers });
    }
}
