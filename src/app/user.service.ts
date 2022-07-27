import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './baseUrl';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userName: string = sessionStorage.getItem("firstname");

    constructor(private httpClient: HttpClient) { }

    registerUser(user: User): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(user);
        console.log("Service: " + user);
        console.log("Body: " + body);
        return this.httpClient.post<any>(baseUrl + "/users/register", body, { 'headers': headers });
    }

    loginUser(user: User): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(user);
        console.log("Service: " + user);
        console.log("Body: " + body);
        return this.httpClient.post<any>(baseUrl + "/users/login", body, { 'headers': headers });
    }

    getUsername() {
        return this.userName;
    }
}
