import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Documents } from '../documents';
import { DocumentsService } from '../documents.service';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';
import { Personaldetails } from '../personaldetails';
import { PersonaldetailsService } from '../personaldetails.service';
import { Sales } from '../sales';
import { SalesService } from '../sales.service';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
    selector: 'app-documents',
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

    aadharCard: File;
    panCard: File;
    photo: File;
    sixMonthSalarySlip: File;

    user: any;

    documents: Documents = new Documents();

    sales: Sales = new Sales();
    loan: Loan;

    vehicle: Vehicle;

    constructor(private vehicleService: VehicleService, private router: Router, private personalDetailsService: PersonaldetailsService, private loanService: LoanService, private documentService: DocumentsService, private salesService: SalesService) {

    }

    ngOnInit(): void {
        this.loan = this.loanService.getLoan();
        console.log("NGLOAN" + JSON.stringify(this.loan));

        this.vehicle = this.vehicleService.getVehicleData();
        this.sales.vehicleId = this.vehicle.vehicleId;

    }

    onAadharCardFileChange(event) {
        this.aadharCard = event.target.files[0];
    }

    onPanCardFileChange(event) {
        this.panCard = event.target.files[0];
    }

    onPhotoChange(event) {
        this.photo = event.target.files[0];
    }

    onSalarySlipChange(event) {
        this.sixMonthSalarySlip = event.target.files[0];
    }

    uploadDocuments() {
        console.log(this.aadharCard);
        console.log(this.panCard);
        console.log(this.photo);
        console.log(this.sixMonthSalarySlip);

        let aadharData = new FormData();
        let panData = new FormData();
        let photoData = new FormData();
        let slipData = new FormData();

        aadharData.append('file', this.aadharCard);
        aadharData.append('upload_preset', 'baglocater');
        aadharData.append('cloud_name', 'baglocater');

        panData.append('file', this.panCard);
        panData.append('upload_preset', 'baglocater');
        panData.append('cloud_name', 'baglocater');

        photoData.append('file', this.photo);
        photoData.append('upload_preset', 'baglocater');
        photoData.append('cloud_name', 'baglocater');

        slipData.append('file', this.sixMonthSalarySlip);
        slipData.append('upload_preset', 'baglocater');
        slipData.append('cloud_name', 'baglocater');

        this.loanService.addLoanDetails(this.loan).subscribe(data => {
            console.log('Loan: ' + data);
            this.sales.loanId = data.loanId;
        });

        this.personalDetailsService.addPersonalDetails(this.personalDetailsService.getPersonalDetails()).subscribe(data => {
            this.sales.applicantId = data.applicantId;
            console.log(data);
            this.documents.personalDetailsId = data.applicantId;
            //Start of documents upload
            this.vehicleService.uploadImage(aadharData).subscribe(imageData => {
                console.log(imageData);
                this.documents.aadharUrl = imageData.secure_url;
                this.vehicleService.uploadImage(panData).subscribe(pan => {
                    this.documents.panUrl = pan.secure_url;
                    this.vehicleService.uploadImage(photoData).subscribe(photo => {
                        this.documents.photoUrl = photo.secure_url;
                        this.vehicleService.uploadImage(slipData).subscribe(slip => {
                            this.documents.sixMonthSalaryUrl = slip.secure_url;
                            console.log(this.documents);

                            this.documentService.addDocuments(this.documents).subscribe(docData => {
                                this.salesService.addSales(this.sales).subscribe(saleData => {
                                    console.log(saleData);
                                    this.router.navigateByUrl("/home");
                                })
                            });
                        })
                    })
                })

            })
            //End
        })


    }

}
