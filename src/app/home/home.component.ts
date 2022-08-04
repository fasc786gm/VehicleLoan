import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Enquiry } from '../enquiry';
import { EnquiryService } from '../enquiry.service';
import { Router } from '@angular/router';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  msg: string;
  clickMessage() {
    this.msg = 'Helpline Support:-1800 103 1333  Whatsapp Number:-9311211333';
    return this.msg;
  }

  message: String;
  enq: Enquiry = new Enquiry();

  constructor(private enquiryService: EnquiryService) { }

  ngOnInit(): void {

  }

  enquiry() {
    console.log("In");

    console.log(JSON.stringify(this.enq));
    this.enquiryService.enquiryUser(this.enq).subscribe(msg => {
      this.message = msg;
      //console.log(this.message);
      Swal.fire(
        'Request Submitted Successfully',
        'Our Next Customer Support Will get back as soon as possible',
        'success'
      )
      this.enq = new Enquiry();
    }
    );
  }

}

