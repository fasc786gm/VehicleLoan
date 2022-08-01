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

    checkUserId(userId: number, email: string): Observable<any> {
        return this.httpClient.get<any>(baseUrl + "/users/checkUserId/" + userId + "/" + email);
    }

    resetPassword(userId: number, password: string): Observable<any> {
        return this.httpClient.get<any>(baseUrl + "/users/forgotPassword/" + userId + "/" + password);
    }
}
