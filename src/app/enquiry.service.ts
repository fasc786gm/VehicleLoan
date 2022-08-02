import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import baseUrl from "./baseUrl";
import { Enquiry } from "./enquiry";



@Injectable({
    providedIn: 'root'
  })
  export class EnquiryService {
  
    constructor(private httpClient:HttpClient) { }

    enquiryUser(enq:Enquiry): Observable<String>{
        return this.httpClient.post("http://localhost:9090/enquiry/addenquuiryDetails", enq,{responseType:'text'});
      }

      getPendingenquiry(): Observable<any> {
        return this.httpClient.get<any>("http://localhost:9090/enquiry/viewAllEnquiry");
      }
    }    