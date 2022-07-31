import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './baseUrl';
import { Loan } from './loan';

@Injectable({
    providedIn: 'root'
})
export class LoanService {

    loan: Loan;

    constructor(private httpClient: HttpClient) { }

    addLoanDetails(loan: Loan): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        let body = JSON.stringify(loan);
        return this.httpClient.post<any>(baseUrl + "/loanDetails/addLoanDetails", body, { 'headers': headers });
    }

    setLoan(loan: Loan) {
        this.loan = loan;
    }

    getLoan() {
        return this.loan;
    }

}
