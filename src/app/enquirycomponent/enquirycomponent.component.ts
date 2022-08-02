import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnquiryService } from '../enquiry.service';

@Component({
  selector: 'app-enquirycomponent',
  templateUrl: './enquirycomponent.component.html',
  styleUrls: ['./enquirycomponent.component.css']
})
export class EnquirycomponentComponent implements OnInit {

  enquiryapplicants:any;
  enquiryId:number;
  name:String;
  phone:String;
  email:String;
  comments:string;

  constructor(private router: Router,private enq:EnquiryService) { }

  ngOnInit(): void {
    this.enq.getPendingenquiry().subscribe(pendingenq => {
      this.enquiryapplicants = pendingenq;
  })
  }

}
